import {
  CALL_ADD_TODO,
  ADD_TODO_FAILED,
  ADD_TODO_SUCCESS,
  addTodo,
  addTodoFailed,
  addTodoSuccess,
  onCallAddTodo,
  onAddTodoFailed,
  onAddTodoSuccess,
} from "./index";
import Todo from "classes/Todo";

describe("Action Creators", () => {
  it("addTodo returns a CALL_ADD_TODO action", () => {
    const todo = {
      title: "Title",
      description: "Description",
    };

    expect(addTodo(todo.title, todo.description)).toStrictEqual({
      type: CALL_ADD_TODO,
      title: todo.title,
      description: todo.description,
    });
  });

  it("addTodoFailed returns a ADD_TODO_FAILED action", () => {
    const error = "Error message";

    expect(addTodoFailed(error)).toStrictEqual({
      type: ADD_TODO_FAILED,
      error,
    });
  });

  it("addTodoSuccess returns a ADD_TODO_SUCCESS action", () => {
    const todo = new Todo(1, "Todo title", "Todo description");

    expect(addTodoSuccess(todo)).toStrictEqual({
      type: ADD_TODO_SUCCESS,
      todo,
    });
  });
});

describe("Action Handlers", () => {
  it("onCallAddTodo sets loading to true", () => {
    const initialState = {
      randomProp: 123,
      loading: {
        randomProp: 123,
        addTodo: false,
      },
    };

    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        addTodo: true,
      },
    };

    expect(onCallAddTodo(initialState)).toStrictEqual(expectedState);
  });

  it("onAddTodoFailed sets loading to false", () => {
    const initialState = {
      randomProp: 123,
      loading: {
        randomProp: 123,
        addTodo: true,
      },
    };

    const expectedState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        addTodo: false,
      },
    };

    expect(onAddTodoFailed(initialState)).toStrictEqual(expectedState);
  });

  it("onAddTodoSuccess sets loading to false and appends todo to data", () => {
    const initialState = {
      data: [new Todo(1, "Todo title", "Todo description")],
      randomProp: 123,
      loading: {
        randomProp: 123,
        addTodo: true,
      },
    };

    const todo = new Todo(2, "Added todo title", "Added todo description");

    const expectedState = {
      ...initialState,
      data: [...initialState.data, todo],
      loading: {
        ...initialState.loading,
        addTodo: false,
      },
    };

    expect(onAddTodoSuccess(initialState, { todo })).toStrictEqual(
      expectedState
    );
  });
});
