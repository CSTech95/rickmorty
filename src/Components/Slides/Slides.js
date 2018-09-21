import React, { Component } from "react";
import styled from "styled-components";
import { Img, Container, Previous, Next } from "./Slides.style";
// import axios from "axios";

const Slides = () => {
  return (
    <Container>
      {/* <Previous /> */}
      <Img src="https://i.imgur.com/YnGtWpj.jpg" />
      {/* <Next /> */}
    </Container>
  );
};

export default Slides;
