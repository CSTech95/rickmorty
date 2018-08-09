import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import Characters from './Components/Characters/Characters';
import Header from './Components/Header/Header';
import S_Characters from './Components/Characters/S_Characters/S_Characters';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[]
    }
  }
  componentDidMount() {
    const id = 1;
    axios.get(`https://rickandmortyapi.com/api/character/?page=${id}`)
      .then(res => {
        const persons = res.data.results;
        // console.log(persons);
        this.setState({ persons:persons });
        console.log(this.state.persons);
      })
  }
  render() {
    return (
      <div>
        <Header />
        <S_Characters>
        { this.state.persons.map(x => 
          <Characters 
          name={x.name} 
          status={x.status} 
          image={x.image}
          />
          
        ) }
        </S_Characters>
      </div>
    );
  }
}

export default App;
