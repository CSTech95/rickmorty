import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Styles/Button/Button";
import { Div } from "./Home.style";
import Slides from "../Slides/Slides";
import CharnJoin from "./CharnJoin";

const Home = () => {
  return (
    <Div>
      <div className="container">
        {/* <h1>Home</h1> */}
        <Slides />
        <h2>Rick and Morty</h2>
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
        <p>
          Sed eros lacus, placerat in laoreet a, pharetra in purus. Vivamus ut
          cursus nisl. Aliquam quis tortor sed sem consequat ornare. Cras turpis
          lorem, faucibus vulputate facilisis vel, consequat at tortor. Etiam ut
          arcu sed mauris dictum sagittis. Aliquam erat volutpat. Vestibulum nec
          turpis sit amet risus aliquet vehicula.
        </p>
        <p>
          In a arcu ipsum. Mauris ipsum ante, varius nec sodales non, auctor sit
          amet arcu. Integer interdum tortor vitae hendrerit pretium. Morbi
          interdum at nisi eu dignissim. Nullam vitae auctor justo. Aliquam erat
          volutpat. Sed malesuada fringilla quam, at lobortis diam pharetra
          quis. Mauris congue quam nibh, eu aliquet turpis sollicitudin sed.
          Vestibulum feugiat risus non sapien pretium blandit. Etiam vel
          lobortis leo. Aliquam posuere condimentum suscipit.
        </p>
        <Button basic color="blue">
          Learn More
        </Button>
        <CharnJoin />
      </div>
    </Div>
  );
};

export default Home;
