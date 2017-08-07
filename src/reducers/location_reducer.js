import {
  GRAB_USER_COORDS
} from '../actions/location_actions'
import merge from 'lodash/merge'

const defaultState = {
  lat: '',
  lng: ''
}

const LocationReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case GRAB_USER_COORDS:
      return merge({}, state, action.coords)
    default:
      return state
  }
}

export default LocationReducer
