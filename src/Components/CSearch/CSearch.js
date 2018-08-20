import React, { Component } from "react";

export default class CSearch extends Component {
  handleChange(e) {
    let value = e.target.value;
    this.props.value(value);
    console.log(value);
  }
  render() {
    return <input type="text" onChange={this.handleChange.bind(this)} />;
  }
}
