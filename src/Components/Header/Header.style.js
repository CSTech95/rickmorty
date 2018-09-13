import React from "react";
import styled from "styled-components";

import { colors } from "../Colors";
const { red, blue, black, grey } = colors;

export const Wrapper = styled.header`
  display: flex;
  background: ${black};
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
`;
