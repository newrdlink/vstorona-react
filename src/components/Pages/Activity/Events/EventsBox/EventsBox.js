import React from 'react'
import './EventsBox.css'

import Event from '../Event/Event'

const EventsBox = ({ eventsList }) => {

  return (
    <ul className="events-box">
      {eventsList.map((event) => {
        // const { startTime, title, subtitle, description, _id, images, image } = event
        return <Event
          key={event._id}
          event={event}
        />
      })}
    </ul>
  )
}

export default EventsBox
