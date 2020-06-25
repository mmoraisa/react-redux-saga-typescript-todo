import { ITodosState } from 'ducks/TodosDucks';

/* Action Types */
export const CALL_REMOVE_TODO = '@todo/CALL_REMOVE';
export const REMOVE_TODO_FAILED = '@todo/REMOVE_FAILED';
export const REMOVE_TODO_SUCCESS = '@todo/REMOVE_SUCCESS';

/* Action Interfaces */
export interface ICallRemoveTodo {
  type: string,
  todoId: string
}

export interface IRemoveTodoFailed {
  type: string,
  todoId: string,
  error: string
}

export interface IRemoveTodoSuccess {
  type: string,
  todoId: string
}

/* Action Creators */
export const removeTodo = (todoId: string) : ICallRemoveTodo => ({
  type: CALL_REMOVE_TODO,
  todoId
})

export const removeTodoFailed = (todoId: string, error: string) : IRemoveTodoFailed => ({
  type: REMOVE_TODO_FAILED,
  todoId,
  error
})

export const removeTodoSuccess = (todoId: string) : IRemoveTodoSuccess => ({
  type: REMOVE_TODO_SUCCESS,
  todoId
})

/* Action Handlers */
export const onCallRemoveTodo = (state: ITodosState, { todoId }: ICallRemoveTodo): ITodosState => ({
  ...state,
  loading: {
    ...state.loading,
    removeTodo: [
      ...state.loading.removeTodo,
      todoId
    ]
  }
})

export const onRemoveTodoFailed = (state: ITodosState, { todoId }: IRemoveTodoFailed): ITodosState => ({
  ...state,
  loading: {
    ...state.loading,
    removeTodo: state.loading.removeTodo.filter(id => id !== todoId)
  }
})

export const onRemoveTodoSuccess = (state: ITodosState, { todoId }: IRemoveTodoSuccess): ITodosState => ({
  ...state,
  data: state.data.filter(todo => todo.id !== todoId),
  loading: {
    ...state.loading,
    removeTodo: state.loading.removeTodo.filter(id => id !== todoId)
  }
})

export default {
  [CALL_REMOVE_TODO]: onCallRemoveTodo,
  [REMOVE_TODO_FAILED]: onRemoveTodoFailed,
  [REMOVE_TODO_SUCCESS]: onRemoveTodoSuccess
}
