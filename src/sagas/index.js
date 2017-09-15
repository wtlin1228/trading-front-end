import { take, put, call, fork, select, all} from 'redux-saga/effects'

import { watchAddTest } from './testSaga'
import { watchClickToggle } from './toggleSaga'

export default function* rootSaga() {
  yield watchAddTest()
  yield watchClickToggle()
}