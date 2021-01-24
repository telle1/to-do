import React, { useContext, useState, useRef, useEffect } from 'react';
import {ToDoContext} from './todoprovider';
import { ACTIONS } from './todoreducer';

import './styles/todoitem.css';

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
    <div className='todo-item'>
      {todo.editMode ? (
        <React.Fragment>
          <input
            ref={editRef}
            className='todo-edit'
            type='text'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          ></input>
          <button
            className='btn btn-save'
            onClick={() =>
              dispatch({
                type: ACTIONS.SAVE_EDIT,
                payload: { id: todo.id, change: edit },
              })
            }
          >
            Save
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {todo.completed ? (
            <button className='btn btn-check'>
              <i className='fas fa-check'></i>
            </button>
          ) : (
            <div>
              <button
                className='btn btn-complete'
                onClick={() =>
                  dispatch({ type: ACTIONS.COMPLETE, payload: { id: todo.id } })
                }
              />
            </div>
          )}
          <span className='item-name' style={{textDecoration: todo.completed ? 'line-through' : 'none'
        }}>{todo.name}</span>

          <button
            className='btn btn-edit'
            disabled={todo.completed}
            onClick={() =>
              dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })
            }
          >
            <i class='fas fa-edit'></i>
          </button>
          <button
            className='btn btn-delete'
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
          >
            <i class='far fa-trash-alt'></i>
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default ToDoItem;
