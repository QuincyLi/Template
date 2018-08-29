import { call, put, takeEvery } from 'redux-saga/effects';

import { GETAPPLIST, GOTAPPLIST } from '../Actions/Actions';
import { getAppListSerivce } from 'root/Services/AppListService';

function* getAppList() {
  try {
    const response = yield call(getAppListSerivce);
    yield put({ type: GOTAPPLIST });
  } catch (e) {
    console.log(e)
  }
}

export function* watchGetToken() {
  yield takeEvery(GETAPPLIST, getAppList);
}