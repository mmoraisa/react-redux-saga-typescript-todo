import { v4 as uuidv4 } from 'uuid';

class TodosAPI {

  static addTodo = (title: string, description: string) =>
    new Promise((res) => {
      console.log(`API: Adding todo`)
      setTimeout(
        () => res(uuidv4()),
        2000
      )
    })

  static removeTodo = (todoId: string) =>
    new Promise((res) => {
      console.log(`API: Removing todo ${todoId}`)
      setTimeout(res, 2000)
    })

}

export default TodosAPI
