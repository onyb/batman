const defaultState = {
  page: 1,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PREFERENCES.UPDATE_PAGE': {
      return {
        ...state,
        page: action.data,
      }
    }

    default: {
      return state
    }
  }
}
