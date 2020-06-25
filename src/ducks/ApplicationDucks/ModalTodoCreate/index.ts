import { IApplicationState } from 'ducks/ApplicationDucks';

/* Action Types */
export const CLOSE_MODAL_TODO_CREATE = '@application/modals/TodoCreate/CLOSE';
export const OPEN_MODAL_TODO_CREATE = '@application/modals/TodoCreate/OPEN';

/* Action Interfaces */
export interface ICloseModalTodoCreate {
  type: string
}

export interface IOpenModalTodoCreate {
  type: string
}

/* Action Creators */
export const closeModalTodoCreate = () : ICloseModalTodoCreate => ({
  type: CLOSE_MODAL_TODO_CREATE
})

export const openModalTodoCreate = () : IOpenModalTodoCreate => ({
  type: OPEN_MODAL_TODO_CREATE
})

/* Action Handlers */
export const onCloseModalTodoCreate = (state: IApplicationState): IApplicationState => ({
  ...state,
  modals: {
    ...state.modals,
    todoCreate: {
      ...state.modals.todoCreate,
      open: false
    }
  }
})

export const onOpenModalTodoCreate = (state: IApplicationState): IApplicationState => ({
  ...state,
  modals: {
    ...state.modals,
    todoCreate: {
      ...state.modals.todoCreate,
      open: true,
      alreadyOpened: true
    }
  }
})

export default {
  [CLOSE_MODAL_TODO_CREATE]: onCloseModalTodoCreate,
  [OPEN_MODAL_TODO_CREATE]: onOpenModalTodoCreate
}
