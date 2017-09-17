import { take, takeEvery, put, call, fork, select, all} from 'redux-saga/effects'

import * as actions from '../actions'
import * as types from '../constants/actionTypes'

export function* testTakeFunction(message) {
  console.log(message)
}

export function* watchAddTest() {
  while(true) {
    const { payload } = yield take(types.ADD_TEST)
    yield fork(testTakeFunction, payload)
  }
}