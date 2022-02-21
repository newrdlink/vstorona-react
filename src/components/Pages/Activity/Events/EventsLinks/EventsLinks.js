import React from 'react'
import './EventsLinks.css'

const EventsLinks = ({ isActive, handlerViewEvents }) => {

  return (
    <div className={`events-links ${!isActive && "events-links_active"}`}>
      <button
        className={`events-links__button`}
        name="willbe"
        type="button"
        onClick={handlerViewEvents}>Предстоящие мероприятия</button>
      <button
        className="events-links__button"
        name="didbe"
        type="button"
        onClick={handlerViewEvents}>Прошедшие мероприятия</button>
    </div>
  )
}

export default EventsLinks
