import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">my-travels</h1>
        </header>
        <Travel  
        destination = "Beijing"
        country = "China"
        photo = "https://img.ev.mu/images/attractions/5943/1605x642/16187.jpg"
        distance = "8 684 km"
        />
        <Travel  
        destination = "Tokyo"
        country = "Japan"
        photo = "https://media.vogue.in/wp-content/uploads/2018/04/Your-ultimate-guide-to-Tokyo-Japan1-866x487.jpg"
        distance = "10 202 km"
        />
      </div>
    );
  }
}

export default App;