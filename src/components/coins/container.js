import { connect } from 'react-redux'

import Coins from './component'
import { fetchCoins, watchCoin, unwatchCoin } from './actions'

const mapStateToProps = state => ({
  coins: state.coins.coins,
  preferences: state.preferences,
})

const mapDispatchToProps = dispatch => ({
  fetchCoins: page => dispatch(fetchCoins(page)),
  watchCoin: coin => dispatch(watchCoin(coin)),
  unwatchCoin: coin => dispatch(unwatchCoin(coin)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Coins)
