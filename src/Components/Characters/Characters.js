import React, { Component } from "react";
// import S_Characters from "./S_Characters/S_Characters";
import Character from "../Character/Character";
import axios from "axios";
import S_Characters from "../../Styles/S_Characters/S_Characters";

export default class Characters extends Component {
  state = {
    persons: [],
    query: ""
  };

  componentDidMount() {
    const search = this.state.query;
    axios
      // react Router to filter through single character api endpoint
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        const persons = res.data.results;
        // console.log(persons);
        this.setState({ persons });
        console.log(this.state.persons);
      });
  }
  changeQuery(query) {
    this.setState({ query });
  }

  render() {
    return (
      <S_Characters>
        <div className="container">
          {this.state.persons.map(x => (
            <Character
              key={x.id}
              name={x.name}
              status={x.status}
              image={x.image}
            />
          ))}
        </div>
      </S_Characters>
    );
  }
}
