import React from 'react'
import './EventsBox.css'

import Event from '../Event/Event'

const EventsBox = ({ eventsList }) => {

  return (
    <ul className="events-box">
      {eventsList.map((event) => {
        const { startTime, endTime, title, subtitle, _id, image } = event
        return <Event
          startTime={startTime}
          endTime={endTime}
          title={title}
          subtitle={subtitle}
          key={_id}
          image={image}
        />
      })}
    </ul>
  )
}

export default EventsBox
