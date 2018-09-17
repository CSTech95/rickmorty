import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

// const myRed = "#fb595d";
// const myBlue = "#9FCDE6";

const { red, blue, black, grey } = colors;

export const Div = styled.div`
  height: 100%;
  background: turquoise;
`;

export const Search = styled.div`
  background: ${grey};
  /* border-top: 2px solid ${blue}; */
  /* border-bottom: 2px solid ${red}; */
  padding-bottom: 10px;
  padding-top: 10px;
`;
export const ApiResults = styled.div`
  background: ${grey};
  display: grid;
  align-items: center;
  grid-gap: 0.3em;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 96.5%;
`;
