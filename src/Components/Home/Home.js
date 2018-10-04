import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Styles/Button/Button";
import { Div } from "./Home.style";
import Slides from "../Slides/Slides";
import CharnJoin from "./CharnJoin";
import Something from "./RM_Stats";

const Home = () => {
  return (
    <Div>
      {/* <div className="container"> */}
      <Slides />
      <Something />

      <div
        style={{
          background: "yellow",
          padding: "1em"
        }}
      >
        <h1>Rick and Morty</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ante tellus, fringilla eget lobortis quis, viverra ut justo. Nam
          commodo feugiat ante, non luctus nulla tincidunt vel. Nullam odio
          erat, laoreet a rutrum vitae, ornare vel enim. Sed leo sem, pharetra
          non purus at, lacinia efficitur risus. Duis varius mauris a leo
          congue, nec pharetra risus interdum. Pellentesque egestas ligula vitae
          imperdiet congue. Vestibulum sed lorem id lectus vestibulum facilisis
          elementum a magna. Ut viverra vel dui nec ornare. Vivamus gravida
          vehicula felis a pellentesque. Aliquam a leo eget neque venenatis
          consequat mollis vitae nisl. Praesent placerat sollicitudin mi eget
          consequat. Nullam cursus dui in eleifend tempus. Sed at mollis lacus.
        </p>
        <Button basic color="blue">
          Learn More
        </Button>
      </div>
      <div
        style={{
          background: "pink",
          padding: "1em"
        }}
      >
        <h1>Rick and Morty</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ante tellus, fringilla eget lobortis quis, viverra ut justo. Nam
          commodo feugiat ante, non luctus nulla tincidunt vel. Nullam odio
          erat, laoreet a rutrum vitae, ornare vel enim. Sed leo sem, pharetra
          non purus at, lacinia efficitur risus. Duis varius mauris a leo
          congue, nec pharetra risus interdum. Pellentesque egestas ligula vitae
          imperdiet congue. Vestibulum sed lorem id lectus vestibulum facilisis
          elementum a magna. Ut viverra vel dui nec ornare. Vivamus gravida
          vehicula felis a pellentesque. Aliquam a leo eget neque venenatis
          consequat mollis vitae nisl. Praesent placerat sollicitudin mi eget
          consequat. Nullam cursus dui in eleifend tempus. Sed at mollis lacus.
        </p>
        <Button basic color="blue">
          Learn More
        </Button>
      </div>
      <div
        style={{
          background: "yellow",
          padding: "1em"
        }}
      >
        <h1>Rick and Morty</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ante tellus, fringilla eget lobortis quis, viverra ut justo. Nam
          commodo feugiat ante, non luctus nulla tincidunt vel. Nullam odio
          erat, laoreet a rutrum vitae, ornare vel enim. Sed leo sem, pharetra
          non purus at, lacinia efficitur risus. Duis varius mauris a leo
          congue, nec pharetra risus interdum. Pellentesque egestas ligula vitae
          imperdiet congue. Vestibulum sed lorem id lectus vestibulum facilisis
          elementum a magna. Ut viverra vel dui nec ornare. Vivamus gravida
          vehicula felis a pellentesque. Aliquam a leo eget neque venenatis
          consequat mollis vitae nisl. Praesent placerat sollicitudin mi eget
          consequat. Nullam cursus dui in eleifend tempus. Sed at mollis lacus.
        </p>
        <Button basic color="blue">
          Learn More
        </Button>
      </div>
      <CharnJoin />
      {/* </div> */}
    </Div>
  );
};

export default Home;
