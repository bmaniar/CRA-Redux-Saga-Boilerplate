import { takeLatest } from "redux-saga/effects";
import * as actions from '../actions'

import testSaga from './testSaga'

export function* watcherSaga() {
  yield takeLatest(actions.triggerAction, testSaga);
}