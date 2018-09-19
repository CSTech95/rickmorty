import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Characters from "./Components/Characters/Characters";
import Join from "./Components/Join/Join";
import NoMatch from "./Components/NoMatch/NoMatch";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Div } from "./App.style";

class App extends Component {
  render() {
    return (
      <Div>
        <div className="Header">
          <Header />
        </div>
        <div className="Container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/characters" component={Characters} />
            <Route path="/join" component={Join} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </Div>
    );
  }
}

export default App;
