import React, { Component } from "react";
import S_Characters from "./S_Characters/S_Characters";
import Character from "./Character";
import axios from "axios";
import CSearch from "../CSearch/CSearch";

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      query: ""
    };
  }
  componentDidMount() {
    const search = this.state.query;
    axios
      // react Router should solve my problem here
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(res => {
        const persons = res.data.results;
        console.log(persons);
        this.setState({ persons });
        console.log(this.state.persons);
      });
  }
  changeQuery(query) {
    this.setState({ query });
  }

  render() {
    return (
      <div>
        <CSearch value={this.changeQuery.bind(this)} />
        <S_Characters>
          {this.state.persons.map(x => (
            <Character name={x.name} status={x.status} image={x.image} />
          ))}
        </S_Characters>
      </div>
    );
  }
}
