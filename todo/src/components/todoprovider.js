import React, { createContext, useEffect, useReducer, useState } from 'react';
import uuid from 'react-uuid';

export const ToDoContext = createContext();

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SAVE_EDIT: 'SAVE_EDIT',
  TOGGLE_VIEW: 'TOGGLE_VIEW',
  COMPLETE: 'COMPLETED'
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        {
          id: uuid(),
          name: action.payload.input,
          completed: false,
          editMode: false,
        },
      ];
    case ACTIONS.EDIT_TODO:
      return todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            editMode: !item.editMode,
          };
        } else {
          return item;
        }
      });
    case ACTIONS.SAVE_EDIT:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            editMode: !todo.editMode,
            name: action.payload.change,
          };
        } else {
          return todo;
        }
      });
    case ACTIONS.DELETE_TODO:
      const toDelete = todos.filter((todo) => todo.id !== action.payload.id);
      return toDelete;
    case ACTIONS.COMPLETE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
}

function ToDoProvider(props) {
  const [todos, dispatch] = useReducer(reducer, []);
  const [view, setView] = useState('All');
  const [selected, setSelected] = useState([])

  useEffect(() => {
    displayedToDos()
  }, [todos, view]);

  const handleView = (e) => {   
    setView(e)
  };

  const displayedToDos = () => {
    if (view === 'All') {
      setSelected(todos);
    } else if (view === 'Completed') {
      const completed = todos.filter((todo) => todo.completed === true);
      setSelected(completed);
    } else if (view === 'In Progress'){
      const inProgress = todos.filter((todo) => todo.completed === false);
      setSelected(inProgress);
    }
  }

  console.log(view, 'view');
  console.log(todos, 'todos');


  return (
    <ToDoContext.Provider value={{ todos, dispatch, selected, handleView }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;
