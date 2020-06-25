import { all, fork } from 'redux-saga/effects';
import TodosSagas from './TodosSagas';

export default function*() {
  yield all([
    fork(TodosSagas)
  ]);
}
