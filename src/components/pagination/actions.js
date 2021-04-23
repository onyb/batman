import { fetchCoins } from '../coins/actions'

export const updatePage = page => async dispatch => {
  await fetchCoins(page)

  await dispatch({
    type: 'PREFERENCES.UPDATE_PAGE',
    data: page,
  })
}
