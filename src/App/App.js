import React, { Component } from 'react';
import './App.scss';
import apiCalls from './apiCalls'
import Form from '../Form/Form'
import ResContainer from '../ResContainer/ResContainer'

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
    // console.log(this.state.guests)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <ResContainer guests={this.state.guests} />
      </div>
    )
  }
}

export default App;

