import Todo from 'classes/Todo';

export interface ITodosState {
  data: Array<Todo>
}

const INITIAL_STATE: ITodosState = {
  data: [
    new Todo('Criar projeto exemplo 1', 'Utilizar React, Redux, Saga e Typescript'),
    new Todo('Criar projeto exemplo 2', 'Utilizar React, Redux, Saga e Typescript'),
    new Todo('Criar projeto exemplo 3', 'Utilizar React, Redux, Saga e Typescript')
  ]
}

const ACTION_HANDLERS = {

}

export default [INITIAL_STATE, ACTION_HANDLERS]
