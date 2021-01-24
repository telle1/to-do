import React, { createContext, useEffect, useReducer, useState } from 'react';
import reducer from './todoreducer';

export const ToDoContext = createContext();

function ToDoProvider(props) {
  const [todos, dispatch] = useReducer(reducer, [], (initial) => JSON.parse(localStorage.getItem('todos')) || initial);
  const [view, setView] = useState('All');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    displaySelectedToDos();
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, view]);
 
  const handleView = e => setView(e);
 
  const displaySelectedToDos = () => {
    if (view === 'All') {
      setSelected(todos);
    } else if (view === 'Completed') {
      const completed = todos.filter((todo) => todo.completed === true);
      setSelected(completed);
    } else if (view === 'In Progress') {
      const inProgress = todos.filter((todo) => todo.completed === false);
      setSelected(inProgress);
    }
  };

  console.log(view, 'view');
  console.log(todos, 'todos');

  return (
    <ToDoContext.Provider value={{ todos, dispatch, selected, handleView }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;
