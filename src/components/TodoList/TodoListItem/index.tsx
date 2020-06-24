import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, List, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Todo from 'classes/Todo';
import { removeTodo } from 'ducks/TodosDucks/RemoveTodo';

interface ITodoListItem {
  todo: Todo
}

const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {

  const dispatch = useDispatch()

  const callRemoveTodo = useCallback(
    () => dispatch(removeTodo(todo.id)),
    [dispatch, todo]
  )

  return (
    <List.Item
      actions={[
        <Popconfirm
          placement='leftTop'
          title={'Are you sure to delete this todo?'}
          onConfirm={callRemoveTodo}
          okText="Yes"
          cancelText="No">
          <Button key="btn-remove-item" icon={<DeleteOutlined />}>Remove</Button>
        </Popconfirm>
      ]}
    >
      <List.Item.Meta
        title={todo.title}
        description={todo.description}
      />
    </List.Item>
  )
}

export default TodoListItem
