import { combineReducers } from 'redux'
import testReducer from './testReducer'
import collapsedReducer from './collapsedReducer'

const rootReducer = combineReducers({
  testReducer: testReducer,
  collapsedReducer: collapsedReducer
})

export default rootReducer