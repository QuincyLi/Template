import { call, put, takeEvery } from 'redux-saga/effects';

import { GETTOKEN, GOTTOKEN } from '../Actions/Actions';
import { getTokenSerivce } from 'root/Services/TokenServices';

function* getToken() {
  try {
    const token = yield call(getTokenSerivce);
    yield put({ type: GOTTOKEN, token });
  } catch (e) {
    console.log(e)
  }
}

export function* watchGetToken() {
  yield takeEvery(GETTOKEN, getToken);
}