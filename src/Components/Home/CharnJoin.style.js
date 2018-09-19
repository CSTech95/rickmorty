import styled from "styled-components";

export const Container = styled.div`
  padding-top: 5px;
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
    background: #165949;
    align-self: stretch;
    justify-self: stretch;
  }
`;
