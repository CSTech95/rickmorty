import React from "react";
import { Grid, Segment, Divider } from "semantic-ui-react";

export default () => {
  return (
    <Grid columns={3}>
      <Grid.Column>
        <Segment basic>
          <h5>
            Fourth Season has been announced. Season 4 is set to air soon...
          </h5>
        </Segment>
      </Grid.Column>
      <Divider vertical>Or</Divider>
      <Grid.Column>
        <Segment basic>
          <h5>High Quality episodes made to make you laugh out loud</h5>
        </Segment>
      </Grid.Column>
      <Divider vertical>And</Divider>
      <Grid.Column>
        <Segment basic>
          <h5>3 seasons, 31 episodes and an abundance of awesome characters</h5>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
