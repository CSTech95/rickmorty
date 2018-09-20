import React from "react";
import styled from "styled-components";

const myRed = "#fb595d";
const myBlue = "#9FCDE6";

export const Div = styled.div`
  height: 100%;
  width: 100%;
  /* border: 1.5px solid black; */
  /* box-shadow: 5px 5px 5px black; */
  /* display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: 1fr 4fr 1fr; */
  /*place-items: center;
  place-content: stretch; */
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  place-self: stretch;
  @media screen and (min-width: 400px) {
    ${Img} {
      width: 100%;
      height: 100%;
    }
  }
`;
// export const  = styled.img`
//   width: 50%;
//   height: 50%;
// `;
