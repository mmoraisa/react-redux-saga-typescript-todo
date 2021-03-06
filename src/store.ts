import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'ducks';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
