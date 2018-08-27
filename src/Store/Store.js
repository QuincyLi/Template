import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from '../Reducers/Reducers';
import Saga from '../Sagas/Saga';

const sagaMiddleWare = createSagaMiddleware();
//注册 middleware
const middlewares = [sagaMiddleWare]

const store = createStore(Reducers, applyMiddleware(...middlewares));
sagaMiddleWare.run(Saga);

export default store;