import React, { useContext, useState, useRef, useEffect } from 'react';
import { ToDoContext } from './todoprovider';
import { ACTIONS } from './todoreducer';
import { Input } from './styles/inputs.js';
import { Button } from './styles/button.js';
import styled from 'styled-components';

const TodoItem = styled.div`
  background-color: white;
  display: flex;
  width: 60%;
  margin: auto;
  margin-bottom: 1rem;
  min-height: 2rem;
  align-items: center;
`;

const TodoName = styled.span`
  margin-right: auto;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

function ToDoItem({ todo }) {
  const { dispatch } = useContext(ToDoContext);
  const [edit, setEdit] = useState(todo.name);
  const editRef = useRef();

  useEffect(() => {
    if (todo.editMode) {
      editRef.current.focus();
    }
  }, [todo.editMode]);

  return (
    <TodoItem>
      {todo.editMode ? (
        <React.Fragment>
          <Input ref={editRef} type='text' value={edit} onChange={(e) => setEdit(e.target.value)}></Input>
          <Button
            color='rgb(253, 144, 162)'
            onClick={() => dispatch({ type: ACTIONS.SAVE_EDIT, payload: { id: todo.id, change: edit } })}
          >
            Save
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {todo.completed ? (
            <Button textColor='rgb(253, 144, 162)'>
              <i className='fas fa-check'></i>
            </Button>
          ) : (
            <Button round onClick={() => dispatch({ type: ACTIONS.COMPLETE, payload: { id: todo.id } })} />
          )}
          <TodoName completed={todo.completed}>{todo.name}</TodoName>

          <Button
            color='rgb(253, 144, 162)'
            disabled={todo.completed}
            onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })}
          >
            <i class='fas fa-edit'></i>
          </Button>
          <Button textColor='rgb(253, 144, 162)'
            onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
          >
            <i class='far fa-trash-alt'></i>
          </Button>
        </React.Fragment>
      )}
    </TodoItem>
  );
}

export default ToDoItem;
