import React, { Component } from 'react';
import './App.css';
//import './components/Map'
import Map from './components/Map';
//import Menu from './components/Menu';
import Menu from './components/Menu';
import Locations from './components/Locations';


class App extends Component {

  state = {};


  render() {
    return (
      <div>
         {/* <Locations/> */}
         <Menu/>
          <Map/>
      </div>
    )
  }
}
export default App;



