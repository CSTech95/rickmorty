import styled from "styled-components";
import { colors } from "../Colors";
const { red, lightblue, blue, darkblue, black, grey, orange } = colors;

export const Container = styled.div`
  padding: 0.5em;
  display: grid;
  grid-gap: 0.5em;
  grid: repeat(4, 1fr) / 1fr;
  justify-items: stretch;
  align-items: stretch;
  height: 900px;

  .characters {
    background: black;
    position: relative;
    color: white;
  }
  .txt {
    font-size: 3em;
    /* background: pink; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* transform: rotate(-45deg); */
  }
  .join {
    background: white;
    color: black;
    position: relative;
  }
  .characters:hover {
    /* background: #9fcde6; */
  }
  .join:hover {
    /* background:  */
  }
  @media screen and (max-width: 400px) {
    ${Container} {
      grid: repeat(4, 1fr) / 1fr;
    }
  }
`;
