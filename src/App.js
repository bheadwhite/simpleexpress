import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    axios.get('/api/test').then(response => {
      console.log(response)
      this.setState({
        counter: response.data.counter
      })
    })
  }

  addClick = () => {
    axios.post('/api/test').then(response => {
      console.log(response)
      this.setState({
        counter: response.data.counter
      })
    })
  }

  render() {
    return (
      <div className="App" onClick={this.addClick}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          num of clicks: {this.state.counter}
        </p>
      </div>
    );
  }
}

export default App;
