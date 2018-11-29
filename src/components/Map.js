import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      center={props.center}
    >
      {props.markers && 
       markers
      .filter(marker => marker.isVisible)
      .map((marker, idx) => (
        
        <Marker key={idx} position={{lat: marker.lat, lng: marker.lng}} />
      
       
      ))}

    </GoogleMap>
  ))
);


export default class Map extends Component {

  render() {
    return < MyMapComponent
      {...this.props}
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c"
      loadingElement={< div style={{ height: `100%` }} />}
      containerElement={< div style={{ height: `400px` }} />}
      mapElement={< div style={{ height: `100%` }} />}
    />
  }
}
