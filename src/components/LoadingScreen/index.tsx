import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Container } from './styles';

const LoadingScreen: React.FC<{}> = () => (
  <Container>
    <LoadingOutlined style={{ fontSize: '36px', color: '#4990fe' }}/>
  </Container>
)

export default LoadingScreen;
