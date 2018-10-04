import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

const { red, blue, black, grey, lightblue, darkblue } = colors;

export const Myfooter = styled.footer`
background: ${black};
  color: white;
  /* border-top: 1px solid ${red}; */
  width: 100%;
  height: 45px;
  bottom: 0px;
  text-align: center;
  font-weight: bold;
  .Ftext {
    padding-top: 15px;
  }
`;
