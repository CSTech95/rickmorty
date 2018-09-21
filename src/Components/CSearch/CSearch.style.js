import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
const { red, black, grey, blue } = colors;

export const Form = styled.form`
  padding: 1.5em;
  display: grid;
  grid-gap: 0.3em;
  grid-template-columns: 160px 75px 1fr;
  place-content: stretch;
  place-items: stretch;
  grid-template-areas: "input button .";
  @media screen and (max-width: 400px) {
    ${Form} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 30px 30px;
      grid-template-areas:
        "input input input"
        ". button .";
    }
  }
`;
export const Input = styled.input`
  padding-left: 0.5em;
  grid-area: input;
  /* width: 150px; */
  @media screen and (max-width: 400px) {
    ${Input} {
      text-align: center;
    }
  }
`;
export const Button = styled.button`
  grid-area: button;
  background: ${red};
  color: white;
`;
