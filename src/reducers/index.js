import { combineReducers } from 'redux'
import testReducer from './testReducer'
import collapsedReducer from './collapsedReducer'
import productsReducer from './productsReducer'
import navigateTradingPageReducer from './navigateTradingPageReducer'

const rootReducer = combineReducers({
  testReducer: testReducer,
  collapsedReducer: collapsedReducer,
  productsReducer: productsReducer,
  navigateTradingPageReducer: navigateTradingPageReducer,
})

export default rootReducer