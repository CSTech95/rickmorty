import React from "react";
import CardBase from "../../Base/Card";

import { colors } from "../../Colors";
const { red, blue } = colors;

class Card extends CardBase {}

Card.Api = Card.extend`
  &&& {
    font-size: 0.8em;
    div.content {
      background: ${blue};
    }
    img: 100%;

    div.header {
      /* font-family: "Chicle"; */
      letter-spacing: 0.2em;
      color: white;
      padding-bottom: 0.2em;
    }
    div.meta {
      font-family: Arial, Helvetica, sans-serif;
      color: white;
    }
  }
`;

Card.Custom = Card.extend.attrs({
  padding: props => props.padding || "1em"
})`
  &&& {
    padding: ${props => props.padding};
  }
`;

export default Card;
