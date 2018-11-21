import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';

// ...

export class Map extends React.Component {

render(){
    return(
        <div id='map'></div>
    )
}

}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c")
})(Map)