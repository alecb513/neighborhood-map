import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './components/Map'
import Map from './components/Map'

class App extends Component {

  state = {};


  render() {
    return (
      <div>Hello App
          <Map />
      </div>
    )
  }
}
export default App;
