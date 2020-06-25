import { all, call, fork, takeEvery, put } from 'redux-saga/effects';
import { message } from 'antd';
import {
  CALL_REMOVE_TODO, ICallRemoveTodo,
  removeTodoFailed, removeTodoSuccess
} from 'ducks/TodosDucks/RemoveTodo';
import TodosAPI from 'integrations/TodosAPI';

function* removeTodo({ todoId }: ICallRemoveTodo) {
  try {
    yield call(TodosAPI.removeTodo, todoId)
    yield put(removeTodoSuccess(todoId))
    message.success('Todo removed successfully!')
  }
  catch (error) {
    yield put(removeTodoFailed(todoId, error))
    message.error('The todo could not be removed!')
  }
}

function* removeTodoSagas() {
  yield takeEvery(CALL_REMOVE_TODO, removeTodo)
}

export default function* () {
  yield all([
    fork(removeTodoSagas)
  ])
}
