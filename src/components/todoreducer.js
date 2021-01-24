
import uuid from 'react-uuid';

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SAVE_EDIT: 'SAVE_EDIT',
  TOGGLE_VIEW: 'TOGGLE_VIEW',
  COMPLETE: 'COMPLETED',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      const addToDo = [
        ...todos,
        {
          id: uuid(),
          name: action.payload.input,
          completed: false,
          editMode: false,
        },
      ];
      return addToDo;
    case ACTIONS.EDIT_TODO:
      return todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            editMode: !item.editMode,
          };
        } else {
          return item;
        }
      });
    case ACTIONS.SAVE_EDIT:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            editMode: !todo.editMode,
            name: action.payload.change,
          };
        } else {
          return todo;
        }
      });
    case ACTIONS.DELETE_TODO:
      const toDelete = todos.filter((todo) => todo.id !== action.payload.id);
      return toDelete;
    case ACTIONS.COMPLETE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
}

export default reducer;
