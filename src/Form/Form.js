import React from 'react'
import './Form.scss'

const Form = () => {
  return(
    <form>
      <input type='text' placeholder='Name' />
      <input type='text' placeholder='Date (MM/DD)' />
      <input type='text' placeholder='Time' />
      <input type='text' placeholder='Number of Guests' />
      <button type='button'>Make Reservation</button>
    </form>
  )
}

export default Form;