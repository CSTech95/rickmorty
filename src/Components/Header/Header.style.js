import React from "react";
import styled from "styled-components";

import { colors } from "../Colors";
const { red, blue, black, grey, lightblue, darkblue } = colors;

export const Wrapper = styled.header`
  display: flex;
  background: ${lightblue};
  height: 50px;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${darkblue};
  }
  ul.nav {
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: flex-end;
  }

  ul.nav li {
    color: white;
    list-style-type: none;
    margin: 10px;
    align-self: center;
  }

  ul.nav li:hover {
    color: turquoise;
    cursor: pointer;
  }

  span.logo {
    margin: 10px;
    color: white;
    align-self: center;
  }
  img {
    box-sizing: border-box;
    padding: 0.4em;
    height: 50px;
    /* display: none; */
  }
  img:hover {
    cursor: pointer;
  }
  /* Media-Queries */
  @media screen and (max-width: 400px) {
    ${Wrapper} {
      /* flex-direction: column;
      height: 100%; */
      /* justify-items: center; */
    }
    .logo {
      /* display: none; */
    }
    /* img {
      height: 7em;
    } */
    ul.nav {
      /* flex-direction: column; */
      /* height: 100%; */
      font-size: 1em;
    }
    li.nav-items {
      box-sizing: border-box;
      padding: 0.2em;
    }
  }
`;
