import React, { useState, useContext } from 'react';
import { ToDoContext } from './todoprovider';
import { ACTIONS } from './todoreducer';
import './styles/todoinput.css';

function ToDoInput() {
  const [input, setInput] = useState('');
  const { dispatch, handleView } = useContext(ToDoContext);

  const handleInput = () => {
    if (input) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { input: input } });
      setInput('');
    }
  };

  const checkEnter = (e) => {
    if (e.keyCode == 13) handleInput();
  };

  return (
    <div className='todoInputDiv'>
      <input
        className='todoInput'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => checkEnter(e)}
      ></input>
      <button className='btn btn-add' onClick={handleInput}>
        Add Item
      </button>

      <select
        className='view-toggler'
        onChange={(e) => handleView(e.target.value)}
      >
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='In Progress'>In Progress</option>
      </select>
    </div>
  );
}

export default ToDoInput;
