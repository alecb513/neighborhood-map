import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';
import Menu from './components/Menu';

import SquareAPI from "./API/";




class App extends Component {

   constructor(){
     super();
     this.state = {
       venues:[],
       markers:[],
       center: [],
       zoom: 12
     }
   }

  


   componentDidMount(){
     SquareAPI.search({
       near: "New York, NY",
       query: "Pizza",
       limit: 10
     }).then(results => {
       const {venues} = results.response;
       const {center} = results.response.geocode.feature.geometry;
       const { markers} = venue.map(venue => {
         return {
           lat: venue.location.lat,
           lng: venue.location.lng,
           isOpen: false,
           isVisible:true,
         };
       });
       this.setState({venues,center, markers});
       console.log(results);
     });
   }

  render() {
    return (
      <div>
        
          <Map{...this.state}/>
      </div>
    )
  }
}
export default App;



