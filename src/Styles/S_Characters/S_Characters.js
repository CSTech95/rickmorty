import React from "react";
import styled from "styled-components";

const myRed = "#fb595d";
const myBlue = "#9FCDE6";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  justify-items: center;
  background: ${myBlue};
  /* grid-gap: 5px; */
  text-align: center;
  font-size: 0.5rem;

  li.nav-items a {
    color: #000;
  }

  li {
    color: #000;
  }

  li {
    list-style-type: none;
  }

  img {
    width: 50%;
    height: 50%;
  }
`;
