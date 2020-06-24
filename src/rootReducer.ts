import { combineReducers } from 'redux';

/* Ducks */
import TodosDucks, { ITodosState } from 'ducks/TodosDucks';

export interface IRootState {
  todos: ITodosState
}

const createReducer = ([initialState, actionHandlers]: any) => (
  state = initialState,
  action: any
) =>
  (actionHandlers[action.type] && actionHandlers[action.type](state, action)) ||
  state;

const createRootReducer = () =>
  combineReducers({
    todos: createReducer(TodosDucks)
  });

export default createRootReducer;
