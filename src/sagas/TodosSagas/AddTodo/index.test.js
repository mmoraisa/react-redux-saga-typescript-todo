import sinon from "sinon";
import { runSaga } from "redux-saga";
import { all, fork, takeEvery } from "redux-saga/effects";
import Todo from "classes/Todo";
import {
  addTodoSuccess,
  CALL_ADD_TODO,
  addTodoFailed,
} from "ducks/TodosDucks/AddTodo";
import TodosAPI from "integrations/TodosAPI";
import rootSaga, { addTodo, addTodoSagas } from "./index";

describe("Add todo saga", () => {
  afterEach(function () {
    sinon.restore();
  });

  it("dispatches addTodoSuccess", async () => {
    const dispatched = [];
    const todoId = "123456789";

    const todo = new Todo(todoId, "Todo title", "Todo description");

    sinon.stub(TodosAPI, "addTodo").returns(todoId);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      addTodo,
      { title: todo.title, description: todo.description }
    ).toPromise();

    expect(dispatched).toStrictEqual([addTodoSuccess(todo)]);
  });

  it("dispatches addTodoFailed if API throws error", async () => {
    const dispatched = [];
    const error = new Error("Error message");
    const todoId = "123456789";

    const todo = new Todo(todoId, "Todo title", "Todo description");

    sinon.stub(TodosAPI, "addTodo").throws(error);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      addTodo,
      { title: todo.title, description: todo.description }
    ).toPromise();

    expect(dispatched).toStrictEqual([addTodoFailed(error)]);
  });

  it("calls addTodo every CALL_ADD_TODO actions", async () => {
    const gen = addTodoSagas();
    expect(gen.next().value).toStrictEqual(takeEvery(CALL_ADD_TODO, addTodo));
  });
});

it("rootSaga fork addTodoSagas", () => {
  const gen = rootSaga();
  expect(gen.next().value).toStrictEqual(all([fork(addTodoSagas)]));
});
