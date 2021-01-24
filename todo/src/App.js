import './App.css';
import React from 'react'
import ToDoInput from './components/todoinput'
import ToDoList from './components/todolist'


function App() {

  return (
    <div className="App">
      <ToDoInput/>
      <ToDoList/>
    </div>
  );
}




export default App;
