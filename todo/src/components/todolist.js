import React, { useContext } from 'react';
import { ToDoContext } from './todoprovider';
import ToDoItem from './todoitem';
import './styles/todolist.css'

function ToDoList(){

    const { selected } = useContext(ToDoContext);


    return (
        
        <div className="todo-list">
            {selected.map(todo=> <ToDoItem key={todo.id} todo={todo}/>)}
        </div>
        
    
    )
}

export default ToDoList;