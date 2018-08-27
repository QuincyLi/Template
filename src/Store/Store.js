import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from '../Reducers/Reducers';
import { watchGetToken } from '../Sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleware();
//注册 middleware
const middlewares = [sagaMiddleWare]

const store = createStore(Reducers, applyMiddleware(...middlewares));
sagaMiddleWare.run(watchGetToken);

export default store;