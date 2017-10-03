import * as types from '../constants/actionTypes'

export const navigate_trading_page = (payload) => (
  {
    type: types.NAVIGATE_TRADING_PAGE,
    payload: payload,
  }
)
