import React from 'react'
import './EventTime.css'

import getMonth from '../../../../../../helpers/getMonthEvent'

const EventTime = ({ isActive, startTime }) => {

  const startTimeEvent = new Date(startTime)
  const eventDay = startTimeEvent.getDate()
  const eventMonth = startTimeEvent.getMonth() + 1

  return (
    <div className="event-time">
      <p className="event-time__day">{eventDay}</p>
      <p className="event-time__month-year">{`${getMonth(eventMonth)} ${startTimeEvent.getFullYear()} г.`}</p>
      <p className="event-time__current-time">
        {`${startTimeEvent.getHours()}.${startTimeEvent.getMinutes()}`}
      </p>
    </div>
  )
}

export default EventTime