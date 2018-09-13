import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "./Header.style";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/" className="logo">
          <img src="https://vignette.wikia.nocookie.net/rickandmorty/images/1/1e/Rick_and_morty_icon.png/revision/latest?cb=20150805041642&format=original" />
        </Link>

        <ul className="nav">
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-items">
            <Link to="/character">Character</Link>
          </li>
          <li className="nav-items">
            <Link to="/join">Join</Link>
          </li>
        </ul>
      </Wrapper>
    );
  }
}
