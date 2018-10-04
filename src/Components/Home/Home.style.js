import React from "react";
import styled from "styled-components";

import { colors } from "../Colors";

const { grey, lightblue, darkblue, red } = colors;

export const Div = styled.div`
  height: 100%;
  width: 100%;
  background: white;

  div.container {
  }
  div.footer {
  }
  p {
    /* border-top: 3px solid black; */
    /* border-bottom: 3px solid black; */
    padding: 0.5rem;
    line-height: 2em;
    /* background: ${lightblue}; */
  }
  h1{
    font-family: "Oswald";
    color: ${red};

  }
`;
