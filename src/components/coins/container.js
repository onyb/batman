import { connect } from 'react-redux'

import Coins from './component'
import { fetchCoins } from './actions'

const mapStateToProps = state => ({
  coins: state.coins.coins,
  preferences: state.preferences,
})

const mapDispatchToProps = dispatch => ({
  fetchCoins: page => dispatch(fetchCoins(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Coins)
