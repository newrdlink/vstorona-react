import React from 'react'
import './Event.css'
import { Link } from 'react-router-dom'

import EventTime from './EventTime/EventTime'

const Event = ({ startTime, endTime, title, subtitle, link, image }) => {
  return (
    <li className="event">
      <img src={image} alt="#" className="event__image" />
      <EventTime startTime={startTime} endTime={endTime} />
      <h3 className="event__title">{title}</h3>
      <p className="event__subtitle">{subtitle}</p>
      <Link to="#" className="event__link">Подробнее</Link>
    </li>
  )
}

export default Event
