const defaultState = {
  coins: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'COINS.LOAD': {
      return {
        ...state,
        coins: action.data,
      }
    }

    default: {
      return state
    }
  }
}
