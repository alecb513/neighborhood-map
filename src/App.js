import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';
import Menu from './components/Menu';

import Marker from './components/Marker';



class App extends Component {

  state = {};


  render() {
    return (
      <div>
         <Menu/>
         
          <Map/>
          <Marker/>
          
      </div>
    )
  }
}
export default App;



