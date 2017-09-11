import { take, takeEvery, put, call, fork, select, all} from 'redux-saga/effects'

import * as actions from '../actions'
import { ADD_TEST } from '../constants/actionTypes'

export function* testTakeFunction(message) {
  console.log(message)
}

export function* watchAddTest() {
  while(true) {
    const { payload } = yield take(actions.addTest)
    yield fork(testTakeFunction, payload)
  }
}