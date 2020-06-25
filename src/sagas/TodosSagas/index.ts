import { all, fork } from 'redux-saga/effects';
import addTodoSagas from './AddTodo';
import removeTodoSagas from './RemoveTodo';

export default function* () {
  yield all([
    fork(addTodoSagas),
    fork(removeTodoSagas)
  ])
}
