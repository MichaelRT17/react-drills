import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      pokemon: {},
      input:'1'
    }
    this.fetchPoke = this.fetchPoke.bind(this);
  }

  componentDidMount() {
    this.fetchPoke()
  }

  fetchPoke() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.input}`).then( response => {
      this.setState({
        pokemon: response.data
      });
    });
  }

  handleChange(val) {
    this.setState({
      input:val
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Number: {this.state.pokemon.id}</h1>
        <h1>Name: {this.state.pokemon.name}</h1>
        <h1>Base XP: {this.state.pokemon.base_experience}</h1>
        <input onChange={e => this.handleChange(e.target.value)}/>
        <button onClick={() => this.fetchPoke()}
        >Find Info</button>
      </div>
    );
  }
}

export default App;
