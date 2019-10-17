import React from 'react'
import './Form.scss'

const Form = ({handleForm, makeReservation}) => {
  return(
    <form>
      <input type='text' 
        placeholder='Name' 
        name='name'
        onChange={(event) => handleForm(event)} />
      <input type='text' 
        placeholder='Date (MM/DD)' 
        name='date' 
        onChange={(event) => handleForm(event)} />
      <input type='text' 
        placeholder='Time' 
        name='time' 
        onChange={(event) => handleForm(event)} />
      <input type='text' 
        placeholder='Number of Guests' 
        name='numGuests'
        onChange={(event) => handleForm(event)} />
      <button type='button'
        onClick={makeReservation}>Make Reservation</button>
    </form>
  )
}

export default Form;