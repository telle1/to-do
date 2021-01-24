import React, { useState, useContext } from 'react';
import { ToDoContext, ACTIONS } from './todoprovider';
import './styles/todoinput.css';

function ToDoInput() {
  const [input, setInput] = useState('');
  const { dispatch, handleView } = useContext(ToDoContext);

  const handleInput = () => {
    setInput('');
    if (input) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { input: input } });
    }
  };

  return (
    <div className='todoInputDiv'>
      <input
        className='todoInput'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className='btn btn-add' onClick={handleInput}>
        Add Item
      </button>

      <select className='view-toggler' onChange={(e) =>
        handleView(e.target.value)
        }>
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='In Progress'>In Progress</option>
      </select>
    </div>
  );
}

export default ToDoInput;
