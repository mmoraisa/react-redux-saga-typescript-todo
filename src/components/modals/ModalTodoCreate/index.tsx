import React, { useCallback } from 'react';
import { Modal, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from 'ducks/TodosDucks/AddTodo';
import { closeModalTodoCreate } from 'ducks/ApplicationDucks/ModalTodoCreate';

interface ITodo {
  title: string,
  description: string
}

interface ITodoCreateProps {
  visible: boolean
}

const ModalTodoCreate: React.FC<ITodoCreateProps> = ({ visible }) => {
  
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const callCloseModalTodoCreate = useCallback(
    () => dispatch(closeModalTodoCreate()),
    [dispatch]
  )

  const callAddTodo = useCallback(
    (todo: ITodo) => {
      dispatch(addTodo(todo.title, todo.description))
    },
    [dispatch]
  )

  return (
    <Modal
      visible={visible}
      title="Create a new todo"
      okText="Create"
      cancelText="Cancel"
      onCancel={callCloseModalTodoCreate}
      onOk={() => {
        form
          .validateFields()
          .then(({ title, description }) => {
            callAddTodo({ title, description })
            callCloseModalTodoCreate()
            form.resetFields()
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the todo title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input the todo description!' }]}
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalTodoCreate
