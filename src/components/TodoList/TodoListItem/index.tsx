import React from 'react';
import { List } from 'antd';
import Todo from 'classes/Todo';

interface ITodoListItem {
  todo: Todo
}

const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
  return (
    <List.Item
      actions={[]}
    >
      <List.Item.Meta
        title={todo.title}
        description={todo.description}
      />
    </List.Item>
  )
}

export default TodoListItem
