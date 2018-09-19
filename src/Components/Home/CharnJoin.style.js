import styled from "styled-components";

export const Container = styled.div`
  /* padding-top: 5px; */
  display: grid;
  grid: 1fr/1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  height: 800px;

  .characters {
    background: #e8853c;
    align-self: stretch;
    justify-self: stretch;
  }
  .join {
    background: #091834;
    align-self: stretch;
    justify-self: stretch;
    color: white;
  }
  .characters:hover {
    background: #9fcde6;
  }
  .join:hover {
    background: #9fcde6;
  }
  @media screen and (max-width: 400px) {
    ${Container} {
      grid: 1fr 1fr/1fr;
    }
  }
`;
