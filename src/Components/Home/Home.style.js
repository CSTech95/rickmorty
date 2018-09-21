import React from "react";
import styled from "styled-components";

import { colors } from "../Colors";

const { grey, lightblue } = colors;

export const Div = styled.div`
  height: 100%;
  width: 100%;
  /* background: ${grey}; */

  div.container {
  }
  div.footer {
  }
  p{
    /* border-top: 3px solid black; */
    /* border-bottom: 3px solid black; */
    padding: .5rem;
    line-height: 2em;
    background: ${lightblue};

  }
`;
