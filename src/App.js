import React, { Component } from "react";
import "./App.css";

import Map from "./components/Map";
import Menu from "./components/Menu";

import SquareAPI from "./API/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      filteredVenues: [],
      markers: [],
      center: [],
      zoom: 14
    };
  }

  componentWillMount = () => {
    SquareAPI.search({
      near: "New York, NY",
      query: "Pizza",
      limit: 10
    }).then(results => {
      console.log(results);
      const { venues } = results.response;
      console.log(venues);
      const { center } = results.response.geocode.feature.geometry;
      console.log(center);
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true
        };
      });
      this.setState({ venues, center, markers }, () =>
        this.setState({ filteredVenues: venues })
      );
    });
  };

  render() {
    return (
      <div className="App">
        <Menu filteredVenues={this.state.filteredVenues} />
        <Map {...this.state} />
      </div>
    );
  }
}
export default App;
