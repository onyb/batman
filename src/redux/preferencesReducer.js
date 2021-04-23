const defaultState = {
  page: 1,
  watchlist: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PREFERENCES.UPDATE_PAGE': {
      return {
        ...state,
        page: action.data,
      }
    }

    case 'PREFERENCES.WATCH_COIN': {
      return {
        ...state,
        watchlist: [action.data, ...state.watchlist],
      }
    }

    case 'PREFERENCES.UNWATCH_COIN': {
      return {
        ...state,
        watchlist: [...state.watchlist].filter(coin => coin.id != action.data.id),
      }
    }

    default: {
      return state
    }
  }
}
