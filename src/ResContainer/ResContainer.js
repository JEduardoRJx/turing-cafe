import React from 'react'
import './ResContainer.scss'
import ResCard from '../ResCard/ResCard'

const ResContainer = ({ guests }) => {
  const reservation = guests.map(guest => {
    return <ResCard guest={guest} key={guest.id} />
  })

  return (
    <section>
      {reservation}
    </section>
  )
}

export default ResContainer;