import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import LocationContainer from './components/location/location_container'



const Root = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        <App />
        <LocationContainer />
      </div>
    </Provider>
  ) 
}

export default Root