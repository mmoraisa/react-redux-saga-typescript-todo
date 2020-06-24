import Todo from 'classes/Todo';

import {
  CALL_REMOVE_TODO, onCallRemoveTodo,
  REMOVE_TODO_FAILED, onRemoveTodoFailed,
  REMOVE_TODO_SUCCESS, onRemoveTodoSuccess
} from './RemoveTodo';

export interface ITodosState {
  data: Array<Todo>,
  loading: {
    removeTodo: Array<string>
  }
}

const INITIAL_STATE: ITodosState = {
  data: [
    new Todo('Criar projeto exemplo 1', 'Utilizar React, Redux, Saga e Typescript'),
    new Todo('Criar projeto exemplo 2', 'Utilizar React, Redux, Saga e Typescript'),
    new Todo('Criar projeto exemplo 3', 'Utilizar React, Redux, Saga e Typescript')
  ],
  loading: {
    removeTodo: []
  }
}

const ACTION_HANDLERS = {

  /* Remove Todo */
  [CALL_REMOVE_TODO]: onCallRemoveTodo,
  [REMOVE_TODO_FAILED]: onRemoveTodoFailed,
  [REMOVE_TODO_SUCCESS]: onRemoveTodoSuccess,

}

export default [INITIAL_STATE, ACTION_HANDLERS]
