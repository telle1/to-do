import React, { useState, useContext } from 'react';
import { ToDoContext } from './todoprovider';
import { ACTIONS } from './todoreducer';
import { Button } from './styles/button.js';
import { Input } from './styles/inputs.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    height: 100%;
  }
  @media(max-width:600px){
    height: 2.5rem;
  }
`;

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
    <Wrapper>
      <Input
        main
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => checkEnter(e)}
      ></Input>
      <Button color='rgb(253, 144, 162)' onClick={handleInput}>
        Add Item
      </Button>
      <select onChange={(e) => handleView(e.target.value)}>
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='In Progress'>In Progress</option>
      </select>
    </Wrapper>
  );
}

export default ToDoInput;
