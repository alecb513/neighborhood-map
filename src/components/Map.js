import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';

// ...

class Map extends Component {

    render() {
      return(
        <div>
          <Map initialCenter={lat: 12345, lng: 678910} zoom={13}/>
        </div>
    )
  }
  
  export default GoogleApiWrapper({ apiKey: "AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c" })(DisplayMap);