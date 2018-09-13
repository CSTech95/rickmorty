import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

// const myRed = "#fb595d";
// const myBlue = "#9FCDE6";

const { red, blue, black, grey } = colors;

export const Div = styled.div`
  position: relative;
  height: 100%;
  background: turquoise;
`;

export const Search = styled.div`
  background: ${blue};
  border-top: 2px solid ${red};
  border-bottom: 2px solid ${red};
`;
export const ApiResults = styled.div`
  background: ${grey};
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
`;
