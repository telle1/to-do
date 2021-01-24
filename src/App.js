import './App.css';
import React from 'react';
import styled from 'styled-components'
import ToDoInput from './components/todoinput'
import ToDoList from './components/todolist'

const Header = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: white;
`

const AppWrapper = styled.div`
  padding: 4rem;
  text-align: center;
  background: linear-gradient(to right bottom, rgb(255, 154, 171), rgb(98, 213, 252));
  min-height: 100vh;
`

function App() {

  return (
    <AppWrapper>
      <Header>My To Do List</Header>
      <ToDoInput/>
      <ToDoList/>
    </AppWrapper>
  );
}




export default App;
