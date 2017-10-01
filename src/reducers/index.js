import { combineReducers } from 'redux'
import testReducer from './testReducer'
import collapsedReducer from './collapsedReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
  testReducer: testReducer,
  collapsedReducer: collapsedReducer,
  productsReducer: productsReducer
})

export default rootReducer