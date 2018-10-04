import React, { Component } from "react";
import { Divider, Segment } from "semantic-ui-react";
import { Form } from "./CSearch.style";
import Button from "../Styles/Button/Button";
import Input from "../Styles/Input/Input";

const CSearch = props => {
  return (
    <Segment raised style={{ margin: "0px", padding: "0px", border: "0px" }}>
      <Form onSubmit={props.getCharacter}>
        {/* <Input placeholder="Search for characters" type="text" name="SearchC" /> */}
        <Input
          padding="1em"
          placeholder="Search for Characters"
          name="SearchC"
        />
        <Divider hidden />
        <Button.Custom basic color="blue" content="Search" />
      </Form>
    </Segment>
  );
};

export default CSearch;
