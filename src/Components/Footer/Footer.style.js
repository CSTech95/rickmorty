import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

const { red, blue, black, grey } = colors;

export const Myfooter = styled.footer`
  background: #091834;
  color: ${red};
  border-top: 1px solid ${grey};
  width: 100%;
  height: 45px;
  bottom: 0px;
  text-align: center;
  .Ftext {
    padding-top: 15px;
  }
`;
