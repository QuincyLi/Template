import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { GETTOKEN } from '../Actions/Actions';

function* getToken() {
  try {
    
  } catch(e) {

  }
}

export function* watchGetToken() {
  yield takeEvery(GETTOKEN, getToken);
}