import sinon from "sinon";
import { message } from "antd";
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
  const error = new Error("Error message");
  const todoId = "123456789";

  let dispatched = [];
  let todo;

  afterEach(() => sinon.restore());

  describe("Fail", () => {
    beforeEach(() => {
      dispatched = [];
      todo = new Todo(todoId, "Todo title", "Todo description");
    });

    const runAddTodoSaga = async (dispatched, todo) => {
      sinon.stub(TodosAPI, "addTodo").throws(error);

      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        addTodo,
        { title: todo.title, description: todo.description }
      ).toPromise();
    };

    it("dispatches addTodoFailed if API throws error", async () => {
      await runAddTodoSaga(dispatched, todo);
      expect(dispatched).toStrictEqual([addTodoFailed(error)]);
    });

    it("shows fail message", async () => {
      const showMessageFail = sinon.stub(message, "error");

      await runAddTodoSaga(dispatched, todo);

      sinon.assert.calledWith(showMessageFail, "The todo could not be added!");
    });
  });

  describe("Success", () => {
    beforeEach(() => {
      dispatched = [];
      todo = new Todo(todoId, "Todo title", "Todo description");
    });

    const runAddTodoSaga = async (dispatched, todoId, todo) => {
      sinon.stub(TodosAPI, "addTodo").returns(todoId);

      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        addTodo,
        { title: todo.title, description: todo.description }
      ).toPromise();
    };

    it("dispatches addTodoSuccess", async () => {
      await runAddTodoSaga(dispatched, todoId, todo);
      expect(dispatched).toStrictEqual([addTodoSuccess(todo)]);
    });

    it("shows success message", async () => {
      const showMessageSuccess = sinon.stub(message, "success");

      await runAddTodoSaga(dispatched, todoId, todo);

      sinon.assert.calledWith(showMessageSuccess, "Todo added successfully!");
    });
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
