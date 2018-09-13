import React, { Component } from "react";

const CSearch = props => {
  return (
    <form onSubmit={props.getCharacter}>
      <input placeholder="Search for characters" type="text" name="SearchC" />
      <button>Search</button>
    </form>
  );
};

export default CSearch;
