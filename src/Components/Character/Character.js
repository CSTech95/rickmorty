import React from "react";
import { Img, Div } from "./Character.style";
const Character = props => {
  return (
    <Div>
      {/* <h5>
        {props.name.slice(0, 10)}
        ...
      </h5> */}
      <Img src={props.image} />
      {/* <h5>{props.status}</h5> */}
    </Div>
  );
};

export default Character;
