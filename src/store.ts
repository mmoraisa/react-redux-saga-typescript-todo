import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'rootReducer';
import rootSaga from 'rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
