import React from "react";
import Carousel from "nuka-carousel";
import { Img, Container } from "./Slides.style";

export default class extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <Container>
        <Carousel
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          autoplay={true}
          transitionMode={"fade"}
        >
          <Img src="https://images4.alphacoders.com/625/thumb-1920-625912.jpg" />
          <Img src="https://images5.alphacoders.com/876/thumb-1920-876590.png" />
          <Img src="https://images.alphacoders.com/876/876589.jpg" />
          <Img src="https://images5.alphacoders.com/642/thumb-1920-642551.png" />
          <Img src="https://images3.alphacoders.com/812/thumb-1920-812062.png" />
        </Carousel>
      </Container>
    );
  }
}
