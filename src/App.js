import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './Components/Characters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[]
    }
  }
  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character/?page=2`)
      .then(res => {
        const persons = res.data;
        // console.log(persons);
        this.setState({ persons:persons.results });
        console.log(this.state.persons);
      })
  }
  render() {
    return (
      <ul>
        { this.state.persons.map(x => 
        <Characters 
        name={x.name} 
        status={x.status} 
        image={x.image}
        />)}
      </ul>
    );
  }
}

export default App;
