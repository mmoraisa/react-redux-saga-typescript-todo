import React from 'react';
import { List, Empty } from 'antd';
import { useSelector } from 'react-redux';
import { IRootState } from 'rootReducer';
import TodoListItem from './TodoListItem';

const TodoList: React.FC<{}> = () => {

  const todos = useSelector(({ todos }: IRootState) => todos.data)

  return (
    <List
      dataSource={todos}
      locale={{
        emptyText: <Empty description="No Todos" />
      }}
      renderItem={todo => <TodoListItem todo={todo} />}
      />
  )
}

export default TodoList
