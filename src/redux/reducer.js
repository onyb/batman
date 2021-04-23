import { combineReducers } from 'redux'

import coinsReducer from './coinsReducer'

const reducer = combineReducers({
  coins: coinsReducer,
})

export default reducer
