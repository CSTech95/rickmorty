import React, { Component } from "react";
// import './App.css';
import axios from "axios";
import Characters from "./Components/Characters/Characters";
import Header from "./Components/Header/Header";
import S_Characters from "./Components/Characters/S_Characters/S_Characters";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Characters />
      </div>
    );
  }
}

export default App;
