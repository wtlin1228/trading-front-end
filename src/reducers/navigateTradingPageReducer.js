import * as types from '../constants/actionTypes'

const initState = {
  current: ['']
};

export default function navigateTradingPageReducer(state=initState, action){
  switch(action.type) {
    case types.NAVIGATE_TRADING_PAGE:
      return {
        ...state,
        current: [action.payload]
      };

    default:
      return state;
  }
}