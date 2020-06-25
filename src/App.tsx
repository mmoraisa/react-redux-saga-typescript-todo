import React, { useCallback, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IRootState } from 'ducks';
import { openModalTodoCreate } from 'ducks/ApplicationDucks/ModalTodoCreate';
import TodoList from 'components/TodoList';
import LoadingScreen from 'components/LoadingScreen';
import { StyledHeader } from './styles';

const ModalTodoCreate = React.lazy(() => import('components/modals/ModalTodoCreate'));

const App: React.FC<{}> = () => {

  const dispatch = useDispatch()

  const callOpenModalTodoCreate = useCallback(
    () => dispatch(openModalTodoCreate()),
    [dispatch]
  )

  const [loadingTodoCreation, modalTodoCreateOpen, alreadyOpenedModalTodoCreate] = useSelector(
    ({ application, todos }: IRootState) => [
      todos.loading.addTodo,
      application.modals.todoCreate.open,
      application.modals.todoCreate.alreadyOpened
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
      {
        alreadyOpenedModalTodoCreate &&
        <Suspense fallback={<LoadingScreen />}>
          <ModalTodoCreate visible={modalTodoCreateOpen}/>
        </Suspense>
      }
    </>
  );
}

export default App;
