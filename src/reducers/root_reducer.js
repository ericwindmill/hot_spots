import { combineReducers } from 'redux'
import LocationReducer from './location_reducer'

const RootReducer = combineReducers({
  location: LocationReducer
})

export default RootReducer
