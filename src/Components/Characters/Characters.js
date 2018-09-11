import React from "react";
import S_Characters from "../../Styles/S_Characters/S_Characters";

const Characters = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} />
      <h5>{props.status}</h5>
    </div>
  );
};

export default Characters;
