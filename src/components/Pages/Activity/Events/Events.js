import React, { useEffect, useState } from 'react'
import './Events.css'

import apiEvents from '../../../../utils/ApiEvents'

import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'

import EventsBox from './EventsBox/EventsBox'
import EventsLinks from './EventsLinks/EventsLinks'

const Events = ({ pageInfo }) => {
  const [eventsList, setEventsList] = useState([])
  const [countWillBe, setCountWillBe] = useState(3)
  const [countDidBe, setCountDidBe] = useState(3)
  const [isActive, setIsActive] = useState(true)

  const timeNow = Date.now()

  const arrEventsWillBe = eventsList.filter((event) => {
    const timeEvent = new Date(event.startTime).getTime()
    return timeNow < timeEvent
  })

  const arrEventsDidBe = eventsList.filter((event) => {
    const timeEvent = new Date(event.startTime).getTime()
    return timeNow > timeEvent
  })

  // console.log(arrEventsWillBe)
  // console.log(arrEventsDidBe)

  const arrEventsWillBeView = arrEventsWillBe.slice(0, countWillBe)
  const arrEventsDidBeView = arrEventsDidBe.slice(0, countDidBe)
  const handlerCountEvents = () => {
    isActive ? setCountWillBe((countWillBe) => countWillBe + 1) :
      setCountDidBe((countDidBe) => countDidBe + 1)
  }

  useEffect(() => {
    apiEvents.getEvents()
      .then((events) => setEventsList(events))
      .catch((error) => console.log(error))
  }, [])


  const handlerViewEvents = () => setIsActive(!isActive)

  return (
    <main className="events">
      <PageTitleShadow
        pageInfo={pageInfo} />
      <EventsLinks isActive={isActive} handlerViewEvents={handlerViewEvents} />
      {
        isActive ? <EventsBox
          eventsList={arrEventsWillBeView} /> : <EventsBox
          eventsList={arrEventsDidBeView} />
      }
      {
        <button type="button" onClick={(evt) => handlerCountEvents(evt)}>Показать ещё</button>
      }
    </main>
  )
}

export default Events
