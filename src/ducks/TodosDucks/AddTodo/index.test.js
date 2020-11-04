import ActionTypesWithHandlers, {
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

describe("Action Types", () => {
  it("CALL_ADD_TODO is defined as @todo/CALL_ADD", () => {
    expect(CALL_ADD_TODO).toBe("@todo/CALL_ADD");
  });

  it("ADD_TODO_FAILED is defined as @todo/ADD_FAILED", () => {
    expect(ADD_TODO_FAILED).toBe("@todo/ADD_FAILED");
  });

  it("ADD_TODO_SUCCESS is defined as @todo/ADD_SUCCESS", () => {
    expect(ADD_TODO_SUCCESS).toBe("@todo/ADD_SUCCESS");
  });
});

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

it("Export Action Types with Handlers", () => {
  expect(ActionTypesWithHandlers).toStrictEqual({
    [CALL_ADD_TODO]: onCallAddTodo,
    [ADD_TODO_FAILED]: onAddTodoFailed,
    [ADD_TODO_SUCCESS]: onAddTodoSuccess,
  });
});
