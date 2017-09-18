import { take, takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as types from '../constants/actionTypes'

function* addTest(action) {
  console.log('yy')
  console.log(action)
  yield put({type: types.ADD_TEST, payload: 123})
}

export function* watchClickToggle() {
  yield takeLatest(types.CLICK_TOGGLE, addTest)
  console.log('saga')
  // while(true) {
  //   yield take(types.CLICK_TOGGLE)
  //   console.log('saga')
  // }
}