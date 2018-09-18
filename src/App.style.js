import React from "react";
import styled from "styled-components";

const myRed = "#fb595d";
const myBlue = "#9FCDE6";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 6fr 1fr;
  grid-template-rows: 50px 1900px 40px;
  grid-template-areas:
    "Header Header Header Header"
    ". Container Container ."
    "Footer Footer Footer Footer";
  text-align: center;
  background: white;
  .Header {
    grid-area: Header;
  }
  .Container {
    grid-area: Container;
  }
  .Footer {
    grid-area: Footer;
  }
`;
