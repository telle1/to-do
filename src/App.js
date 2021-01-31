import React from 'react';
import styled from 'styled-components';
import ToDoInput from './components/todoinput';
import ToDoList from './components/todolist';

const Header = styled.h1`
  font-size: 4rem;
  font-family: 'Shrikhand', cursive;
  text-align: center;
  background-color: #F28291;
  color: #fae0dd;
  text-shadow: 5px 5px #e8555a;
`;

const AppWrapper = styled.div`
  padding: 4rem;
  text-align: center;
  background-color: #FCE0E4;
  min-height: 100vh;
`;

function App() {
  return (
    <React.Fragment>
      <Header>My To Do List</Header>
      <AppWrapper>
        <ToDoInput />
        <ToDoList />
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
