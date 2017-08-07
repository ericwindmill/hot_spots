import React, { Component } from 'react'

class Location extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pos: {}
    }
  }

  // Get Geolocation and put it in the state!
  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.props.updateUserCoordinates(pos.lat, pos.lng) // I need this for subsequent updates
        this.setState({pos: pos}) // I need this for the initial update
        // TODO: I NEED AN INFO WINDOW FOR ERROR HANDLING!
      }.bind(this), function () {
        handleLocationError(true)
      })
    } else {
      handleLocationError(false)
    }
    function handleLocationError (browserHasGeolocation, infoWindow, pos) {
      browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.'
      // infoWindow.setPosition(pos)
      // infoWindow.setContent(browserHasGeolocation ?
      //                       'Error: The Geolocation service failed.' :
      //                       'Error: Your browser doesn\'t support geolocation.')
      // infoWindow.open(map);
    }
  }

  render () {
    return (
      <div className='Location'>
        <div> hello from location </div>

      </div>
    )
  }

}

export default Location