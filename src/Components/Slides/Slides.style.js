import styled from "styled-components";
import { colors } from "../Colors";
const { darkblue, lightblue } = colors;

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  /* display grid;
  grid-template-columns: 1fr; */
  /* justify-items: center; */
  width: 100%;
  height: calc(100vh - 50px);
  /* background: ${lightblue}; */
  /* ---media queries--- */
  @media screen and (min-width: 853px) {
    ${Container} {
      /* height: calc(100vh - 50px); */
    }
  }
  @media screen and (max-width: 750px) {
    ${Container} {
      /* height: 100%; */
      display: none;
    }
  }
`;
// export const Previous = styled.div`
//   /* width: auto; */
//   height: calc(100% - 50px);
// `;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  height: calc(100vh - 50px);
  /* ---media queries--- */
  @media screen and (min-width: 853px) {
    ${Img} {
      /* height: calc(100vh - 50px); */
    }
  }
  @media screen and (max-width: 400px) {
    ${Img} {
      height: 100%;
      /* display: none; */
    }
  }
`;
// export const Next = styled.div`
//   /* width: auto; */
//   height: calc(100v% - 50px);
// `;
