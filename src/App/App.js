import React, { Component } from 'react';
import './App.scss';
import apiCalls from './apiCalls'
import Form from '../Form/Form'
import ResContainer from '../ResContainer/ResContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      guests: [],
      name: '',
      date: '',
      time: '',
      numGuests: 0,
      id: 0
    }
  }

  componentDidMount() {
    let url = 'http://localhost:3001/api/v1/reservations'
    apiCalls(url)
      .then(guests => this.setState({ guests }))
  }

  handleForm = event => {
    let value = event.target.value
    if (event.target.name === 'name') {
      this.setState({name: value})
    } else if (event.target.name === 'date') {
      this.setState({date: value})
    } else if (event.target.name === 'time') {
      this.setState({time: value})
    } else if (event.target.name === 'numGuests') {
      value = parseInt(value)
      this.setState({numGuests: value})
    }
  }

  makeReservation = () =>{
    if (this.state.name !== '' && this.state.date !=='' && 
    this.state.time !== '' && this.state.numGuests > 0) {
      const user = {
        name: this.state.name,
        date: this.state.date,
        time: this.state.time,
        number: this.state.numGuests,
        id: this.state.guests.length + 1
      }
      this.setState({ guests: [...this.state.guests, user],
        name: '',
        date: '',
        time: '',
        numGuests: 0,
        id: 0
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form handleForm={this.handleForm} 
          makeReservation={this.makeReservation} />
        <ResContainer guests={this.state.guests}/>
      </div>
    )
  }
}

export default App;

