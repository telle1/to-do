import React, {useState, useContext} from 'react'
import { ToDoContext, ACTIONS } from './todoprovider'
import './styles/todoinput.css'

function ToDoInput() {

  const [input, setInput] = useState('');
  const {dispatch} = useContext(ToDoContext)

  const handleInput = () => {
    setInput('');
    if (input){
        dispatch({type: ACTIONS.ADD_TODO, payload: {input: input}})
    }
  }

  return (
    <div className="todoInputDiv">
      <input className="todoInput" type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button className="todoInputButton" onClick={handleInput}>Add</button>
    </div>
  );
}

export default ToDoInput;
