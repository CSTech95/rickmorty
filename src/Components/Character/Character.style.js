import React from "react";
import styled from "styled-components";

const myRed = "#fb595d";
const myBlue = "#9FCDE6";

export const Div = styled.div`
  position: relative;
  height: 100%;
  background: turquoise;
`;

export const Search = styled.div`
  background: pink;
`;
export const ApiResults = styled.div`
  background: turquoise;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
`;
