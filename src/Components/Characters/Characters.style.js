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
  padding-bottom: 10px;
  padding-top: 10px;
`;
export const ApiResults = styled.div`
  display: grid;
  grid-gap: 0.5em;
  justify-items: center;
  grid: auto-flow / repeat(auto-fit, minmax(200px, 1fr));
  @media screen and (max-width: 400px) {
    ${ApiResults} {
      grid-template-columns: 1fr;
    }
  }
`;
