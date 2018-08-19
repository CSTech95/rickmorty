import React, { Component } from "react";
import S_Characters from "./S_Characters/S_Characters";
import Character from "./Character";
import axios from "axios";

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }
  componentDidMount() {
    const id = 1;
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${id}`)
      .then(res => {
        const persons = res.data.results;
        // console.log(persons);
        this.setState({ persons: persons });
        console.log(this.state.persons);
      });
  }
  render() {
    return (
      <S_Characters>
        {this.state.persons.map(x => (
          <Character name={x.name} status={x.status} image={x.image} />
        ))}
      </S_Characters>
    );
  }
}
