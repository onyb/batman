import { connect } from 'react-redux'

import WatchList from './component'

const mapStateToProps = state => ({
  coins: state.coins.coins,
  preferences: state.preferences,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)
