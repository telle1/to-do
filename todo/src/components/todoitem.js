import React, { useContext, useState } from 'react';
import { ACTIONS, ToDoContext } from './todoprovider';
import './styles/todoitem.css';

function ToDoItem({ todo }) {
  const { dispatch } = useContext(ToDoContext);
  const [edit, setEdit] = useState(todo.name)

  return (
    <div className='todo-item'>
      {todo.editMode ? (
        <React.Fragment>
          <input className="todo-edit"
            type='text'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          ></input>
          <button
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
            <button className="btn">Complete</button>
          <span className='item-name'>{todo.name}</span>
          <button
            className='btn btn-edit'
            onClick={() =>
              dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })
            }
          >
            Edit
          </button>
          <button
            className='btn btn-delete'
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
          >
            Delete
          </button>
    </React.Fragment>
      )}
    </div>
  );
}

export default ToDoItem;
