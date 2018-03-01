import React from 'react'
import ReactDOM from 'react-dom'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapWrapper extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
  }
}
render() {
 
  const style = {
    width: '93%',
    height: '75%'
  }
    return (
      <Map google={this.props.google}
      style={style}
      initialCenter={{
        lat: 42.15,
        lng: 24.75
      }}
      zoom={13}
      onClick={this.onMapClicked}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapWrapper)