import { all, call, fork, takeEvery, put } from "redux-saga/effects";
import { message } from "antd";
import {
  CALL_ADD_TODO,
  ICallAddTodo,
  addTodoSuccess,
  addTodoFailed,
} from "ducks/TodosDucks/AddTodo";
import TodosAPI from "integrations/TodosAPI";
import Todo from "classes/Todo";

export function* addTodo({ title, description }: ICallAddTodo) {
  try {
    const todoId = yield call(TodosAPI.addTodo, title, description);
    const todo = new Todo(todoId, title, description);

    yield put(addTodoSuccess(todo));
    message.success("Todo added successfully!");
  } catch (error) {
    yield put(addTodoFailed(error));
    message.error("The todo could not be added!");
  }
}

export function* addTodoSagas() {
  yield takeEvery(CALL_ADD_TODO, addTodo);
}

export default function* () {
  yield all([fork(addTodoSagas)]);
}
