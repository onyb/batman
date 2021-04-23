import { combineReducers } from 'redux'

import coinsReducer from './coinsReducer'

const reducer = combineReducers({
  coins: coinsReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return reducer(state, action)
}

export default rootReducer
