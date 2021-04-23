import client from '../../utils/http'

export const fetchCoins = () => async dispatch => {
  await client
    .get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        price_change_percentage: '24h,7d',
      },
    })
    .then(response => dispatch(loadCoins(response.data)))
}

export const loadCoins = coins => ({
  type: 'COINS.LOAD',
  data: coins,
})
