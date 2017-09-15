import { take, takeEvery, put, call, fork, select, all} from 'redux-saga/effects'
import * as actions from '../actions'

export function* watchClickToggle() {
  while(true) {
    yield take(actions.clickToggle)
  }
}