import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { GETTOKEN } from '../Actions/Actions';
import request from '../Utils/request';

function* getToken() {
  try {
    yield request('')
  } catch(e) {
    console.log(e)
  }
}

export function* watchGetToken() {
  yield takeEvery(GETTOKEN, getToken);
}