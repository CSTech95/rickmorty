import React from "react";

const Character = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} />
      <h5>{props.status}</h5>
    </div>
  );
};

export default Character;
