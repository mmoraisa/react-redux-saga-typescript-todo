import { combineReducers } from 'redux';

/* Ducks */
import ApplicationDucks, { IApplicationState } from 'ducks/ApplicationDucks';
import TodosDucks, { ITodosState } from 'ducks/TodosDucks';

export interface IRootState {
  application: IApplicationState,
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
    application: createReducer(ApplicationDucks),
    todos: createReducer(TodosDucks)
  });

export default createRootReducer;
