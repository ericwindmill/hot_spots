import { connect } from 'react-redux'
import Location from './location'
import {
  updateUserCoordinates
} from '../../actions/location_actions'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserCoordinates: (lat, lng) => dispatch(updateUserCoordinates(lat, lng))
  }
}

const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Location)

export default LocationContainer