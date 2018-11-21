import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';

// ...

class Map extends Component {

    render() {
      return(
        <div>
          <Map initialCenter={{lat: 40.7713024, lng: -73.9632393}} zoom={13}/>
        </div>
    )
  }
}
  export default Map({ apiKey: "AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c" })(Map);