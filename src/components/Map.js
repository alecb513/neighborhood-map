import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
//import { renderComponent } from 'recompose'; //<= WAS IN TURORIAL BUT NOT WORKING

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      center={{ lat: props.center.lat, lng: props.center.lng }}>
      {props.markers &&
        props.markers
          .filter(marker => marker.isVisible)
          .map((marker, idx) => (
            <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}
    </GoogleMap>
  ))
);

export default class Map extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <MyMapComponent
        {...this.props}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
