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
    height: 300px;
    width: 500px;
    display: block;
    padding-top: 50px;
  }
  div.footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
`;
