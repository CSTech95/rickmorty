import React, { Component } from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import axios from "axios";
import Characters from "./Components/Characters/Characters";
import Header from "./Components/Header/Header";

const NoMatch = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
const Character = () => {
  return (
    <div>
      <h1>Search for single character</h1>
    </div>
  );
};
const Join = () => {
  return (
    <div>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Characters /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/characters" component={Characters} />
          <Route path="/join" component={Join} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
