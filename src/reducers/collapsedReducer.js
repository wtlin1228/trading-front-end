import * as types from '../constants/actionTypes'

export default function collapsedReducer(state=false, action) {
  switch(action.type) {
    case types.CLICK_TOGGLE: {
      console.log('click toggle')
      return !state
    }
    
    default:
      return false
  }
}