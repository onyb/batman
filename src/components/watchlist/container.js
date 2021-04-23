import { connect } from 'react-redux'

import WatchList from './component'
import { unwatchCoin } from '../coins/actions'

const mapStateToProps = state => ({
  coins: state.coins.coins,
  preferences: state.preferences,
})

const mapDispatchToProps = dispatch => ({
  unwatchCoin: coin => dispatch(unwatchCoin(coin)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)
