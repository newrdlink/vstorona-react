import React from 'react'
import './EventsBox.css'

import Event from '../Event/Event'

const EventsBox = ({ eventsList }) => {

  return (
    <ul className="events-box">
      {eventsList.map((event) => {
        const { startTime, title, subtitle, description, _id, images, image } = event
        return <Event
          startTime={startTime}
          title={title}
          subtitle={subtitle}
          description={description}
          key={_id}
          images={images}
          image={image}
          _id={_id}
        />
      })}
    </ul>
  )
}

export default EventsBox
