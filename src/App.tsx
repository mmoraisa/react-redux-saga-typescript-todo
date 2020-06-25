import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IRootState } from 'rootReducer';
import TodoList from 'components/TodoList';
import ModalTodoCreate from 'components/modals/ModalTodoCreate';
import { openModalTodoCreate } from 'ducks/ApplicationDucks/ModalTodoCreate';
import { StyledHeader } from './styles';

const App: React.FC<{}> = () => {

  const dispatch = useDispatch()

  const callOpenModalTodoCreate = useCallback(
    () => dispatch(openModalTodoCreate()),
    [dispatch]
  )

  const [loadingTodoCreation, modalTodoCreateOpen] = useSelector(
    ({ application, todos }: IRootState) => [
      todos.loading.addTodo,
      application.modals.todoCreate.open
    ]
  )

  return (
    <>
      <StyledHeader>
        <h1>Todo List</h1>
        <Button
          icon={<PlusOutlined />}
          loading={loadingTodoCreation}
          onClick={callOpenModalTodoCreate}>
            Create todo
        </Button>
      </StyledHeader>
      <TodoList />
      <ModalTodoCreate visible={modalTodoCreateOpen}/>
    </>
  );
}

export default App;
