import React from "react";
import { Statistic, Icon } from "semantic-ui-react";
// import Statistic from "../Styles/Statistic/Statistic";

export default () => {
  return (
    <Statistic.Group widths="three" color="pink" size="tiny">
      <Statistic>
        <Statistic.Label>Currently</Statistic.Label>
        <Statistic.Value>3</Statistic.Value>
        <Statistic.Label>Seasons</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Label>North of</Statistic.Label>
        <Statistic.Value>30</Statistic.Value>
        <Statistic.Label>Episodes</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Label>Over</Statistic.Label>
        <Statistic.Value>
          <Icon name="user" />
          490
        </Statistic.Value>
        <Statistic.Label>Characters</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};
