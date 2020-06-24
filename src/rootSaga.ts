import { all, fork } from 'redux-saga/effects';
import TodosSagas from 'sagas/TodosSagas';

export default function*() {
  yield all([
    fork(TodosSagas)
  ]);
}
