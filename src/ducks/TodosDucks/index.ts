import Todo from 'classes/Todo';

import addTodoActionHandlers from './AddTodo';
import removeTodoActionHandlers from './RemoveTodo';

export interface ITodosState {
  data: Todo[],
  loading: {
    addTodo: boolean,
    removeTodo: Array<string>
  }
}

const INITIAL_STATE: ITodosState = {
  data: [
    new Todo('3d04b772-e887-4f20-a273-74ce5fbaf2e6', 'Criar base do projeto', 'Utilizar o Create React App'),
    new Todo('2ef6b1c7-f472-4036-a3b5-992444261104', 'Criar estrutura do estado', 'Utilizar Redux'),
    new Todo('1c2b7538-b5a4-4aff-80ee-cef248ca3007', 'Criar controle de side effects', 'Utilizar Saga')
  ],
  loading: {
    addTodo: false,
    removeTodo: []
  }
}

const ACTION_HANDLERS = {
  ...addTodoActionHandlers,
  ...removeTodoActionHandlers,
}

export default [INITIAL_STATE, ACTION_HANDLERS]
