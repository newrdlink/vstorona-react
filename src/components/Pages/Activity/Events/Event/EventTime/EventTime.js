import React from 'react'
import './EventTime.css'

const EventTime = ({ isActive, time }) => {

  return (
    <div className="event-time">
      <p>{time}</p>
    </div>
  )
}

export default EventTime