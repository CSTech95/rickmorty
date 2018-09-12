import React, { Component } from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import { Div } from "./App.style";

import Character from "./Components/Character/Character";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const NoMatch = () => {
  return (
    <Div>
      <h1>Page Not Found</h1>
    </Div>
  );
};
const Home = () => {
  return <h1>Home</h1>;
};
// const Character = () => {
//   return (
//     <div>
//       <h1>Search for single character</h1>
//     </div>
//   );
// };
const Join = () => {
  return (
    <Div>
      <h1>Join</h1>
    </Div>
  );
};

class App extends Component {
  render() {
    return (
      <Div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/join" component={Join} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Div>
    );
  }
}

export default App;
