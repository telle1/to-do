import React, { useContext } from 'react';
import { ToDoContext } from './todoprovider';
import ToDoItem from './todoitem';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
`;

function ToDoList() {
  const { selected } = useContext(ToDoContext);

  return (
    <Wrapper>
      {selected.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </Wrapper>
  );
}

export default ToDoList;
