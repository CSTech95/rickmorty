import React from "react";
import StatisticBase from "../../Base/Statistic";

class Statistic extends StatisticBase {}

Statistic.Custom = Statistic.extend.attrs({
  padding: props => props.padding || "1em"
})`
  &&& {
    padding: ${props => props.padding};
    width: 5em;
    margin: 0 auto;
    color: red;
  }
`;

export default Statistic;
