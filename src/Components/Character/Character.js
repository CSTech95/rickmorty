import React, { Component } from "react";
import axios from "axios";
import CSearch from "../CSearch/CSearch";
import Characters from "../Characters/Characters";
import { Div } from "./Character.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Character extends Component {
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
        <div className="search">
          <CSearch getCharacter={this.getCharacter} />
        </div>

        <div className="api-wrapper">
          {this.state.APIcharacter
            ? this.state.APIcharacter.map(x => (
                <Characters
                  key={x.id}
                  name={x.name}
                  status={x.status}
                  image={x.image}
                />
              ))
            : null}
        </div>
      </Div>
    );
  }
}

export default Character;
