import React, { Component } from "react";

const CSearch = props => {
  return (
    <form onSubmit={props.getCharacter}>
      <input type="text" name="SearchC" />
      <button>Search</button>
    </form>
  );
};

export default CSearch;
