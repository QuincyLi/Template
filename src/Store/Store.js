import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from '../Reducers/Reducers';
import Saga from '../Saga/Saga';

const sagaMiddleWare = createSagaMiddleware()

const store = createStore()

export default store;