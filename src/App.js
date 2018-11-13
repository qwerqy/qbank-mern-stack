import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchContainer from "./components/SearchContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
