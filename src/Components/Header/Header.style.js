import React from "react";
import styled from "styled-components";

import { colors } from "../Colors";
const { red, blue, black, grey } = colors;

export const Wrapper = styled.header`
  display: flex;
  background: #091834;
  height: 50px;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${grey};
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
    height: 50px;
  }
  img:hover {
    cursor: pointer;
  }
  /* Media-Queries */
  @media screen and (max-width: 400px) {
    ${Wrapper} {
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
    }
    .logo {
      display: block;
    }
    img {
      height: 7em;
    }
    ul.nav {
      flex-direction: column;
      height: 50px;
      padding-top: 9em;
      font-size: 1.5em;
    }
    li.nav-items {
      padding-top: 2em;
    }
  }
`;
