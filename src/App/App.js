import React, { Component } from 'react';
import './App.css';
import apiCalls from './apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      guests: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:3001/api/v1/reservations'
    apiCalls(url)
      .then(guests => this.setState({ guests }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
