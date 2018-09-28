import React, { Component } from "react";
import { Divider } from "semantic-ui-react";
import { Form } from "./CSearch.style";
import Button from "../Styles/Button/Button";
import Input from "../Styles/Input/Input";

const CSearch = props => {
  return (
    <Form onSubmit={props.getCharacter}>
      {/* <Input placeholder="Search for characters" type="text" name="SearchC" /> */}
      <Input padding="1em" placeholder="Search for Characters" name="SearchC" />
      <Divider />
      <Button.Color basic color="blue" content="red">
        Search
      </Button.Color>
    </Form>
  );
};

export default CSearch;
