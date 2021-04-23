import { connect } from 'react-redux'

import Pagination from './component'
import { updatePage } from './actions'

const mapStateToProps = state => ({
  preferences: state.preferences,
})

const mapDispatchToProps = dispatch => ({
  updatePage: page => dispatch(updatePage(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
