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
  const [isActiveWill, setIsActiveWill] = useState(true)

  const timeNow = Date.now()

  const arrEventsWillBeFull = eventsList.filter((event) => {
    const timeEvent = new Date(event.startTime).getTime()
    return timeNow < timeEvent
  })

  const arrEventsDidBeFull = eventsList.filter((event) => {
    const timeEvent = new Date(event.startTime).getTime()
    return timeNow > timeEvent
  })

  const arrEventsWillBeView = arrEventsWillBeFull.slice(0, countWillBe)
  const arrEventsDidBeView = arrEventsDidBeFull.slice(0, countDidBe)
  const handlerCountEvents = () => {
    isActiveWill ? setCountWillBe((countWillBe) => countWillBe + 1) :
      setCountDidBe((countDidBe) => countDidBe + 1)
  }

  useEffect(() => {
    apiEvents.getEvents()
      .then((events) => setEventsList(events))
      .catch((error) => console.log(error))
  }, [])

  const handlerViewEvents = () => setIsActiveWill(!isActiveWill)

  const lockButtonAddEventMore = () => {
    if (isActiveWill) {
      return arrEventsWillBeFull.length === countWillBe ? false : true
    } else {
      return arrEventsDidBeFull.length === countDidBe ? false : true
    }
  }
  // console.log(pageInfo)
  return (
    <main className="events">
      <PageTitleShadow
        pageInfo={pageInfo} />
      <EventsLinks isActive={isActiveWill} handlerViewEvents={handlerViewEvents} />
      {
        isActiveWill ? <EventsBox
          eventsList={arrEventsWillBeView} /> : <EventsBox
          eventsList={arrEventsDidBeView} />
      }
      {
        lockButtonAddEventMore() && <button className="events__button-add" type="button" onClick={(evt) => handlerCountEvents(evt)}>показать ещё</button>
      }
    </main>
  )
}

export default Events
