import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

const { red, blue, black } = colors;

export const Myfooter = styled.footer`
  background-color: ${black};
  color: ${blue};
  /* position: absolute; */
  width: 100%;
  height: 75px;
  bottom: 0px;
  text-align: center;
`;
