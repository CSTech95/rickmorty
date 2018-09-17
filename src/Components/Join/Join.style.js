import styled from "styled-components";
import { colors } from "../Colors";

const { red, blue, black, grey } = colors;

export const Div = styled.div`
  height: 100%;
  background: ${grey};
  position: relative;

  div.header {
    position: absolute;
    top: 0px;
    width: 100%;
  }
  div.container {
    position: absolute;
    top: 50px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
  div.form-wrap {
    background: ${black};
    color: white;
    position: absolute;
    left: 45vw;
    top: 15vh;
    height: 225px;
    width: 450px;
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

  div.footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
`;
