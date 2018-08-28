import React, { Component } from "react";
import styled from "styled-components";
import S_Header from "./Styles/S_Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <S_Header>
        <header>
          <span className="logo">
            <img src="https://vignette.wikia.nocookie.net/rickandmorty/images/1/1e/Rick_and_morty_icon.png/revision/latest?cb=20150805041642&format=original" />
          </span>

          {/* This won't work unless you do a hack that i'm not going to research. Typically
        Images would be retrieved from another server, not locally I'm seeing. (May be wrong) */}
          {/* <span className='logo'><img src={'Rm_icon.png'} /></span> */}

          <ul className="nav">
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/characters">Characters</Link>
            </li>
            <li className="nav-items">
              <Link to="/character">Character</Link>
            </li>
            <li className="nav-items">
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </header>
      </S_Header>
    );
  }
}
