import styled from "styled-components";
import { colors } from "../Colors";

const { red, blue, black, grey, lightblue } = colors;

export const Div = styled.div`
  height: 100%;
  background: ${lightblue};
  div.container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    height: 100%;
  }
  div.form-wrap {
    background: ${red};
    color: white;
    height: 225px;
    width: 100%;
    display: block;
    padding-top: 50px;
  }

  .email {
    padding-bottom: 15px;
  }
  .user {
    padding-bottom: 15px;
  }
  .password {
    padding-bottom: 15px;
  }
`;
