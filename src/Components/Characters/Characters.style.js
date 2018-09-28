import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import CSearch from "../CSearch/CSearch";

// const myRed = "#fb595d";
// const myBlue = "#9FCDE6";

const { red, blue, black, grey, lightblue, darkblue } = colors;

export const Div = styled.div`
  height: 100%;
  /* background: ${lightblue}; */
`;

export const Search = styled.div`
  width: 100%;
  border: 1px solid #1678C1;
  border-right: none;
  border-left: none;
  display: grid;
  place-content: center;
  place-items: center;
  /* background-image: url("https://coverfiles.alphacoders.com/423/42306.jpg"); */
  /* background: ${darkblue}; */
  border-top: 1.5px solid white;
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
