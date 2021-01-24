import React, { createContext, useReducer } from 'react';
import uuid from 'react-uuid';

export const ToDoContext = createContext();

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SAVE_EDIT: 'SAVE_EDIT',
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
            return todo
        }
      });
    case ACTIONS.DELETE_TODO:
      const toDelete = todos.filter((todo) => todo.id !== action.payload.id);
      return toDelete;
    default:
      return todos;
  }
}

function ToDoProvider(props) {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;
