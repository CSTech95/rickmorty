import React, { Component } from "react";
// import { Input } from "semantic-ui-react";
import { NButton, Form, Input } from "./CSearch.style";
import Button from "../Styles/Button/Button";

const CSearch = props => {
  return (
    <Form onSubmit={props.getCharacter}>
      <Input placeholder="Search for characters" type="text" name="SearchC" />
      <Button.Color basic color="blue" content="red">
        Search
      </Button.Color>
    </Form>
  );
};

export default CSearch;
