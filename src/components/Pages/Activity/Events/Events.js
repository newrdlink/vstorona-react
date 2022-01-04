import React, { useEffect, useState } from 'react'
import './Events.css'

import apiEvents from '../../../../utils/ApiEvents'
import { getToken } from '../../../../utils/Token'

import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'

import EventsBox from './EventsBox/EventsBox'
import EventsLinks from './EventsLinks/EventsLinks'

import { useTitle } from '../../../../helpers/createTitlePage'

const Events = ({ pageInfo, loggedIn }) => {

  const [eventsList, setEventsList] = useState([])
  const [countWillBe, setCountWillBe] = useState(3)
  const [countDidBe, setCountDidBe] = useState(3)
  const [isActiveWill, setIsActiveWill] = useState(true)

  const timeNow = Date.now()

  const arrEventsWillBeFull = eventsList.filter((event) => {
    const timeEvent = new Date(event.startTime).getTime()
    return timeNow < timeEvent
  })

  const arrEventsWillBeFullSort = arrEventsWillBeFull.sort((a, b) => {
    const dateA = + (new Date(a.startTime))
    const dateB = + (new Date(b.startTime))
    if (dateA > dateB) {
      return 1
    }
    if (dateA < dateB) {
      return -1
    } return null
  })

  const arrEventsDidBeFull = eventsList.filter((event) => {
    const timeEvent = new Date(event.startTime).getTime()
    return timeNow > timeEvent
  })

  const arrEventsDidBeFullSort = arrEventsDidBeFull.sort((a, b) => {
    const dateA = + (new Date(a.startTime))
    const dateB = + (new Date(b.startTime))
    if (dateA > dateB) {
      return -1
    }
    if (dateA < dateB) {
      return 1
    } return null
  })

  const arrEventsWillBeView = arrEventsWillBeFullSort.slice(0, countWillBe)
  const arrEventsDidBeView = arrEventsDidBeFullSort.slice(0, countDidBe)

  const handlerCountEvents = () => {
    isActiveWill ?
      setCountWillBe((countWillBe) => countWillBe + 1) :
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

  const onClickRemoveEvent = (_id) => {
    const jwt = getToken()

    apiEvents.deleteEvent(_id, jwt)
      .then((event) => {
        const eventsListWithoutdeletedCard = eventsList.filter((item) => item._id !== event._id)
        setEventsList(eventsListWithoutdeletedCard)
        // console.log(event)
      })
      .catch((error) => console.log(error))
    // console.log(_id)
  }
  // console.log(pageInfo)

  useTitle("Афиша мероприятий")

  return (
    <main className="events">
      <PageTitleShadow
        pageInfo={pageInfo}
        startPosition={-500}
      />
      <EventsLinks isActive={isActiveWill} handlerViewEvents={handlerViewEvents} />
      {
        isActiveWill ?
          <EventsBox
            eventsList={arrEventsWillBeView}
            loggedIn={loggedIn}
            onClickRemove={onClickRemoveEvent}
          /> :
          <EventsBox
            eventsList={arrEventsDidBeView}
            loggedIn={loggedIn}
            onClickRemove={onClickRemoveEvent}
          />
      }
      {
        lockButtonAddEventMore() && <button className="events__button-add" type="button" onClick={(evt) => handlerCountEvents(evt)}>показать ещё</button>
      }
    </main>
  )
}

export default Events
