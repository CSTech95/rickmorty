import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "./CharnJoin.style";

const CharnJoin = () => {
  return (
    <Container>
      <div className="characters">
        <div className="txt">Characters</div>
      </div>
      <div className="join">
        <div className="txt">Join</div>
      </div>
      <div className="characters">
        <div className="txt">Characters</div>
      </div>
      <div className="join">
        <div className="txt">Join</div>
      </div>
    </Container>
  );
};
export default CharnJoin;
