import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state={
      myList:[],
      userInput:''
    }
    this.adding = this.adding.bind(this);
  }

  whenInputting(input) {
    this.setState({userInput:input})
  }

  adding() {
    this.setState({
      myList:[...this.state.myList, this.state.userInput],
      userInput:''
    })
  }
  
  render() {
    let list = this.state.myList.map((e, index) => {
      return ( 
      <Todo key={index} tasks={e} />
      )
    })
    return (
      <div className="App">
      <h1>My to-do list:</h1>
        <input value= {this.state.userInput}
        onChange={e => this.whenInputting(e.target.value)}/>
        <button onClick={() => this.adding()}>
          Add</button>
        
        <br />

        {list}
      </div>
    );
  }
}

export default App;
