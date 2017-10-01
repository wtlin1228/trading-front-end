import { fork, all } from 'redux-saga/effects'

import { watchAddTest } from './testSaga'
import { watchClickToggle } from './toggleSaga'
import { watchGetAllProducts } from './productSaga'

export default function* rootSaga() {
  yield all([
    fork(watchAddTest),
    fork(watchClickToggle),
    fork(watchGetAllProducts)
  ])
}