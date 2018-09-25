import React from "react";
import { Img, Div } from "./Character.style";
import { Card } from "semantic-ui-react";
const Character = props => {
  return (
    <Card
      image={props.image}
      header={props.name.slice(0, 15)}
      meta={props.status}
      // description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      // extra={extra}
    />
  );
};

export default Character;
