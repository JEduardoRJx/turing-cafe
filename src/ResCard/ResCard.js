import React from 'react'
import './ResCard.scss'

const ResCard = ({ guest }) => {
  return (
    <article id={guest.id}>
      <h2>{guest.name}</h2>
      <p>{guest.date}</p>
      <p>{guest.time}</p>
      <p>Num. of guests: {guest.number}</p>
      <button className='cancel-btn' 
        type='button'>CANCEL</button>
    </article>
  )
}

export default ResCard;