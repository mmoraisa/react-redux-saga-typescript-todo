import modalTodoCreateActionHandlers from './ModalTodoCreate';

export interface IApplicationState {
  modals: {
    todoCreate: {
      open: boolean,
      alreadyOpen: boolean
    }
  }
}

const INITIAL_STATE: IApplicationState = {
  modals: {
    todoCreate: {
      open: false,
      alreadyOpen: false
    }
  }
}

const ACTION_HANDLERS = {
  ...modalTodoCreateActionHandlers
}

export default [INITIAL_STATE, ACTION_HANDLERS]
