import React, { Component } from 'react';
import { render } from 'react-dom';
import Jokes from 'jokes.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokeText: '',
      jokes: []
    };
    // this.handle something? jokes.bind(this)?
  }
  handleJoke(event) {
    this.setState({jokeText: event.target.value});
  }
}

/* render() {
  return (
    <JokeList
  
  ) */
export default App;
