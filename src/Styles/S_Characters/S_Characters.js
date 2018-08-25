import React from "react";
import styled from "styled-components";

const myRed = "#fb595d";
const myBlue = "#9FCDE6";

export default styled.section`
  div.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    align-items: center;
    justify-items: center;
    background: ${myBlue};
    /* grid-gap: 5px; */
    text-align: center;
    font-size: 0.5rem;
    width: 500px;
    height: 500px;
  }

  li {
    list-style-type: none;
  }

  img {
    width: 70%;
    height: 70%;
  }
`;
