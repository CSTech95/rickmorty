import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

// const myRed = "#fb595d";
// const myBlue = "#9FCDE6";

const { red, blue, black, grey, lightblue } = colors;

export const Div = styled.div`
  height: 100%;
  background: ${lightblue};
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ApiResults = styled.div`
  padding: 0em 1.5em 1.5em 1.5em;
  display: grid;
  grid-gap: 1.5em;
  place-content: center;
  place-items: center;
  grid: auto / repeat(auto-fit, minmax(200px, 1fr));
  @media screen and (max-width: 400px) {
    ${ApiResults} {
      grid-template-columns: 1fr;
      place-self: center;
      place-content: center;
      place-items: center;
    }
  }
`;
