import React, { Component } from 'react';
import './App.css';
import apiCalls from './apiCalls'
import Form from '../Form/Form'

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
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;

