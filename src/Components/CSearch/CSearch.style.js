import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
const { red, black, grey, blue } = colors;

export const Form = styled.form`
  height: 30em;
  padding: 1em;
  display: grid;
  grid-gap: 0.3em;
  grid-template-columns: 1fr;
  place-content: stretch;
  place-items: center;
  grid-template-areas:
    "input"
    "button";
  /* @media screen and (max-width: 400px) {
    ${Form} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 30px 30px 30px;
      grid-template-areas:
        "input input input"
        ". button .";
    }
  } */
`;
export const Input = styled.input`
  padding-left: 0.5em;
  grid-area: input;
  align-self: end;
  /* width: 150px; */
  @media screen and (max-width: 400px) {
    ${Input} {
      text-align: center;
    }
  }
`;
export const Button = styled.button`
  align-self: start;
  grid-area: button;
  background: ${red};
  color: white;
  /* width: 4em; */
`;
