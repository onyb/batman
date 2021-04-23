import { combineReducers } from 'redux'

import coinsReducer from './coinsReducer'
import preferencesReducer from './preferencesReducer'

const reducer = combineReducers({
  coins: coinsReducer,
  preferences: preferencesReducer,
})

export default reducer
