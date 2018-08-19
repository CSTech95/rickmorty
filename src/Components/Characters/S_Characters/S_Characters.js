import React from "react";
import styled from "styled-components";

const myRed = "#fb595d";
const myBlue = "#9FCDE6";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-items: center;
  background: lightcoral;
  grid-gap: 15px;
  text-align: center;

  li {
    list-style-type: none;
  }

  img {
    width: 100%;
  }
`;
