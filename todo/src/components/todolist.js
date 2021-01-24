import React, { useContext } from 'react';
import { ToDoContext } from './todoprovider';
import ToDoItem from './todoitem';
import './styles/todolist.css'

function ToDoList(){

    const { todos } = useContext(ToDoContext);
    console.log(todos, 'todos')

    return (
        <div className="todo-list">
            {todos.map(todo=> <ToDoItem key={todo.id} todo={todo}/>)}
        </div>
    )
}

export default ToDoList;