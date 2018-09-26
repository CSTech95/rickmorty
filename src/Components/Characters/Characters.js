import React, { Component } from "react";
import axios from "axios";
import CSearch from "../CSearch/CSearch";
import Character from "../Character/Character";
import { Div, Search, ApiResults } from "./Characters.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Characters extends Component {
  state = {
    APIcharacter: null
  };

  getCharacter = e => {
    e.preventDefault();
    const inputVal = e.target.elements.SearchC.value;
    if (inputVal) {
      axios
        // react Router to filter through single character api endpoint
        .get(`https://rickandmortyapi.com/api/character/?name=${inputVal}`)
        .then(res => {
          // console.log(res.data.results);
          const APIcharacter = res.data.results;
          this.setState({ APIcharacter });
          console.log(this.state.APIcharacter);
        })
        .catch(error => {
          // RESEARCH ERROR HANDLING TO FIX THIS
          return <h1>No Character(s)</h1>;
        });
    } else return;
  };
  // Ternary starts
  render() {
    return (
      <Div>
        <Search>
          <CSearch getCharacter={this.getCharacter} />
        </Search>
        <ApiResults>
          {this.state.APIcharacter
            ? this.state.APIcharacter.map(x => (
                <Character
                  key={x.id}
                  name={
                    x.name.length <= 13 ? x.name : x.name.slice(0, 12) + "..."
                  }
                  status={x.status}
                  image={x.image}
                />
              ))
            : null}
        </ApiResults>
      </Div>
    );
  }
}

export default Characters;
