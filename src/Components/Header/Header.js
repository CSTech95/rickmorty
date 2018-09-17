import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "./Header.style";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { colors } from "../Colors";
const { blue } = colors;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/" className="logo">
          <img src="https://vignette.wikia.nocookie.net/rickandmorty/images/1/1e/Rick_and_morty_icon.png/revision/latest?cb=20150805041642&format=original" />
        </Link>

        <ul className="nav">
          <li className="nav-items">
            <NavLink exact activeStyle={{ color: blue }} to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-items">
            <NavLink activeStyle={{ color: blue }} to="/character">
              Character
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink activeStyle={{ color: blue }} to="/join">
              Join
            </NavLink>
          </li>
        </ul>
      </Wrapper>
    );
  }
}
