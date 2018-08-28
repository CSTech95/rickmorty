import React, { Component } from "react";

export default class Characters extends Component {
  render() {
    return (
      <div class="cWrap">
        <ul>
          <img src={this.props.image} alt={this.props.name} />
          <li>
            {this.props.name} is {this.props.status}
          </li>
        </ul>
      </div>
    );
  }
}
