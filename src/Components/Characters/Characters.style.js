import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

// const myRed = "#fb595d";
// const myBlue = "#9FCDE6";

const { red, blue, black, grey } = colors;

export const Div = styled.div`
  height: 100%;
  /* background: #ebf2ff; */
`;

export const Search = styled.div`
  /* background: ${grey}; */
  /* border-top: 2px solid ${blue}; */
  /* border-bottom: 2px solid ${red}; */
  /* padding-bottom: 1.5em;
  padding-top: 1.5em; */
`;
export const ApiResults = styled.div`
  padding: 0em 1.5em 1.5em 1.5em;
  display: grid;
  grid-gap: 1.5em;
  place-content: center;
  place-items: center;
  grid: auto-flow / repeat(auto-fit, minmax(200px, 1fr));
  @media screen and (max-width: 400px) {
    ${ApiResults} {
      grid-template-columns: 1fr;
    }
  }
`;