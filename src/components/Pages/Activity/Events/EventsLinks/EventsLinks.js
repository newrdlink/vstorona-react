import React from 'react'
import './EventsLinks.css'

const EventsLinks = ({ isActive, handlerViewEvents }) => {

  return (
    <div className="events-links">
      <button
        className={`events-links__button-will ${!isActive && "events-links__button-will_active"}`}
        name="willbe"
        type="button"
        onClick={handlerViewEvents}>Предстоящие мероприятия</button>
      <button
        className="events-links__button-did"
        name="didbe"
        type="button"
        onClick={handlerViewEvents}>Прошедшие мероприятия</button>
    </div>
  )
}

export default EventsLinks
