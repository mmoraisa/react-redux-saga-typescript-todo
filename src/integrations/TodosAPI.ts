class TodosAPI {

  static removeTodo = (todoId: string) =>
    new Promise((res) => {
      console.log(`API: Removing todo ${todoId}`)
      setTimeout(res, 2000)
    })

}

export default TodosAPI
