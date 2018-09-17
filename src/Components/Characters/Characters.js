import React from "react";
import { Img, Div } from "./Characters.style";
const Characters = props => {
  return (
    <Div>
      <h5>
        {props.name.slice(0, 10)}
        ...
      </h5>
      <Img src={props.image} />
      <h5>{props.status}</h5>
    </Div>
  );
};

export default Characters;
