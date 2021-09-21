import React, { useEffect, useState } from 'react'
import './Main.css'

import ActivityMain from './ActivityMain/ActivityMain'
import Intro from './Intro/Intro'
import EventsMain from './EventsMain/EventsMain'

import apiEvents from '../../utils/ApiEvents'

const Main = ({ currentPath }) => {

  const [eventsList, setEventsList] = useState([])

  useEffect(() => {
    apiEvents.getEvents()
      .then((events) => {
        const timeNow = Date.now()
        const arrEventsWillBeFull = events.filter((event) => {
          const timeEvent = new Date(event.startTime).getTime()
          return timeNow < timeEvent
        })
        const sortArrEvents = arrEventsWillBeFull.sort((a, b) => {
          const dateA = new Date(a.startTime)
          const dateB = new Date(b.startTime)

          return dateA - dateB
        })
        setEventsList(sortArrEvents)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="main">
      <Intro />
      <ActivityMain
        currentPath={currentPath}
      />
      <EventsMain
        eventsList={eventsList}
      />
    </main>
  )
}

export default Main
