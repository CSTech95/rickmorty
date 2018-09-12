import React from "react";
import { Img } from "./Characters.style";
const Characters = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <Img src={props.image} />
      <h5>{props.status}</h5>
    </div>
  );
};

export default Characters;
