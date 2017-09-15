import { fork, all } from 'redux-saga/effects'

import { watchAddTest } from './testSaga'
import { watchClickToggle } from './toggleSaga'

export default function* rootSaga() {
  yield all([
    fork(watchAddTest),
    fork(watchClickToggle)
  ])
}