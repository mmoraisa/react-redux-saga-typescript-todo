import { ITodosState } from 'ducks/TodosDucks';
import Todo from 'classes/Todo';

/* Action Types */
export const CALL_ADD_TODO = '@todo/CALL_ADD';
export const ADD_TODO_FAILED = '@todo/ADD_FAILED';
export const ADD_TODO_SUCCESS = '@todo/ADD_SUCCESS';

/* Action Interfaces */
export interface ICallAddTodo {
  type: string,
  title: string,
  description: string
}

export interface IAddTodoFailed {
  type: string,
  error: string
}

export interface IAddTodoSuccess {
  type: string,
  todo: Todo
}

/* Action Creators */
export const addTodo = (title: string, description: string) : ICallAddTodo => ({
  type: CALL_ADD_TODO,
  title,
  description
})

export const addTodoFailed = (error: string) : IAddTodoFailed => ({
  type: ADD_TODO_FAILED,
  error
})

export const addTodoSuccess = (todo: Todo) : IAddTodoSuccess => ({
  type: ADD_TODO_SUCCESS,
  todo
})

/* Action Handlers */
export const onCallAddTodo = (state: ITodosState): ITodosState => ({
  ...state,
  loading: {
    ...state.loading,
    addTodo: true
  }
})

export const onAddTodoFailed = (state: ITodosState): ITodosState => ({
  ...state,
  loading: {
    ...state.loading,
    addTodo: false
  }
})

export const onAddTodoSuccess = (state: ITodosState, { todo }: IAddTodoSuccess): ITodosState => ({
  ...state,
  data: [ ...state.data, todo ],
  loading: {
    ...state.loading,
    addTodo: false
  }
})

export default {
  [CALL_ADD_TODO]: onCallAddTodo,
  [ADD_TODO_FAILED]: onAddTodoFailed,
  [ADD_TODO_SUCCESS]: onAddTodoSuccess
}
