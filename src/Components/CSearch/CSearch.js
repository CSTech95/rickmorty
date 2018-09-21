import React, { Component } from "react";
import { Input, Button, Form, InputC } from "./CSearch.style";

const CSearch = props => {
  return (
    <Form onSubmit={props.getCharacter}>
      <Input placeholder="Search for characters" type="text" name="SearchC" />
      <Button>Search</Button>
    </Form>
  );
};

export default CSearch;
