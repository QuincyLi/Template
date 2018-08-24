import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { GETTOKEN, GOTTOKEN } from '../Actions/Actions';
import request from '../Utils/request';

function* getToken() {
  try {
    const token = yield call(request, '/getToken');
    yield put({ type: GOTTOKEN, token });
  } catch(e) {
    console.log(e)
  }
}

export function* watchGetToken() {
  yield takeEvery(GETTOKEN, getToken);
}