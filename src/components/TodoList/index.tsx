import React from 'react';
import { List, Empty } from 'antd';
import { useSelector } from 'react-redux';
import { IRootState } from 'rootReducer';
import TodoListItem from './TodoListItem';

const TodoList: React.FC<{}> = () => {

  const todos = useSelector(({ todos }: IRootState) => todos)

  return (
    <List
      dataSource={todos.data}
      locale={{
        emptyText: <Empty description="No Todos" />
      }}
      renderItem={todo =>
        <TodoListItem
          loading={{
            remove: todos.loading.removeTodo.includes(todo.id)
          }}
          todo={todo}
          />}
      />
  )
}

export default TodoList
