import { connect } from 'react-redux'

import Coins from './component'
import { fetchCoins } from './actions'

const mapStateToProps = state => ({
  coins: state.coins.coins,
})

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Coins)
