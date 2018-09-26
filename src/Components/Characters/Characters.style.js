import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import CSearch from "../CSearch/CSearch";

// const myRed = "#fb595d";
// const myBlue = "#9FCDE6";

const { red, blue, black, grey, lightblue } = colors;

export const Div = styled.div`
  height: 100%;
  /* background: ${lightblue}; */
`;

export const Search = styled.div`
  /* height: 30em; */
  display: grid;
  place-content: center;
  place-items: center;
  background-image: url("https://coverfiles.alphacoders.com/423/42306.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: lighten;
  /* opacity: 0.5; */
  /* background-position: bottom right; */
`;
export const ApiResults = styled.div`
  padding: 1.5em 1.5em 1.5em 1.5em;
  display: grid;
  grid-gap: 1.5em;
  place-content: center;
  place-items: center;
  grid: auto / repeat(auto-fit, minmax(150px, 200px));
  @media screen and (max-width: 400px) {
    ${ApiResults} {
      /* grid: auto / repeat(2, minmax(150px, 200px)); */
      place-self: center;
      place-content: center;
      place-items: center;
    }
  }
`;
