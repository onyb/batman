import { connect } from 'react-redux'

import Component from './component'

const mapStateToProps = state => ({
  coins: state.coins,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
