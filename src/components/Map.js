import React, { Component } from 'react';
import Script from 'react-load-script';

class Map extends Component {
    state = {};

    render() {

        function initMap() {
            let map;
            let google;

            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 40.741, lng: -73.998 },
                zoom: 13
            });
        }

    

        return (
            <Script
      url="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c&callback=initMap"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
    
        )
        
    }
}
export default Map;
