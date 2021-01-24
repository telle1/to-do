import React, { useContext } from 'react';
import { ToDoContext } from './todoprovider';
import ToDoItem from './todoitem';
import './styles/todolist.css'

function ToDoList(){

    const { view } = useContext(ToDoContext);
    console.log(view, 'views')

    return (
        
        <div className="todo-list">
            {view.map(todo=> <ToDoItem key={todo.id} todo={todo}/>)}
        </div>
        
    
    )
}

export default ToDoList;