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
      <button className='todoInputButton' onClick={handleInput}>
        Add
      </button>

      <select name='view_toggler' id='view' onChange={(e) =>
        //   dispatch({
        //     type: ACTIONS.TOGGLE_VIEW,
        //     payload: { view: e.target.value },
        //   })
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
