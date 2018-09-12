import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Character from "./Components/Character/Character";
import Join from "./Components/Join/Join";
import NoMatch from "./Components/NoMatch/NoMatch";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/join" component={Join} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
