import modalTodoCreateActionHandlers from './ModalTodoCreate';

export interface IApplicationState {
  modals: {
    todoCreate: {
      open: boolean,
      alreadyOpened: boolean
    }
  }
}

const INITIAL_STATE: IApplicationState = {
  modals: {
    todoCreate: {
      open: false,
      alreadyOpened: false
    }
  }
}

const ACTION_HANDLERS = {
  ...modalTodoCreateActionHandlers
}

export default [INITIAL_STATE, ACTION_HANDLERS]
