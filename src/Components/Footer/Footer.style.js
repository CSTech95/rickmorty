import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

const { red, blue, black, grey } = colors;

export const Myfooter = styled.footer`
  background-color: ${black};
  color: ${grey};
  /* position: absolute; */
  width: 100%;
  height: 75px;
  bottom: 0px;
  text-align: center;
`;
