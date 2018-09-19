import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
const { red, black, grey, blue } = colors;

export const Input = styled.input`
  padding-left: 5px;
  height: 25px;
`;
export const Button = styled.button`
  width: 50px;
  background: ${red};
  color: white;
  height: 25px;
`;
export const Form = styled.form``;
export const InputC = styled.span`
  padding-right: 5px;
`;
