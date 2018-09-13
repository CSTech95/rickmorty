import React from "react";
import { Img, Div } from "./Characters.style";
const Characters = props => {
  return (
    <Div>
      <h3>{props.name}</h3>
      <Img src={props.image} />
      <h5>{props.status}</h5>
    </Div>
  );
};

export default Characters;
