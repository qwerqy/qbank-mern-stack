import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchContainer from "./components/SearchContainer";
import Questions from "./components/Questions";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchContainer />
        <Questions />
      </div>
    );
  }
}

export default App;
