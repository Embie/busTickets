import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapWrapper extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
  }
}
 render() {
    const style = {
      width: '93%',
      height: '30%'
    }
      return (
        <div>
            <strong>
                Address:
            </strong>
            <p>
                Пловдив, България
                бул. "6-ти Септември" 
            </p>             
            <Map 
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 42.15,
            lng: 24.75}}
          zoom={13}
          onClick={this.onMapClicked}
        >
          <Marker 
            onClick={this.onMarkerClick}
            name={'Current location'} 
          />
        </Map>
        </div>
        
      );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapWrapper)