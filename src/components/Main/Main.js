import React, { useEffect, useState } from 'react'
import './Main.css'

import ActivityMain from './ActivityMain/ActivityMain'
import Intro from './Intro/Intro'
import EventsMain from './EventsMain/EventsMain'
import NewsMain from './NewsMain/NewsMain'
import DanceMain from './DanceMain/DanceMain'

import apiEvents from '../../utils/ApiEvents'
import apiNews from '../../utils/ApiNews'
import apiDance from '../../utils/ApiDance'
import { getToken } from '../../utils/Token'

import ContactsMain from './ContactsMain/ContactsMain'

const Main = ({ currentPath, loggedIn }) => {

  const [eventsList, setEventsList] = useState([])
  const [newsAllList, setNewsAllList] = useState([])
  const [dancePage, setDancePage] = useState({ images: [{ link: "temp" }], days: ['1', '2'], startTime: '1', compositionServices: ["temp"] })

  useEffect(() => {
    apiDance.getDance()
      .then((dances) => {
        const [page] = dances
        setDancePage(page)
      })
      .catch((error) => console.log(error))
  }, [])
  // console.log(dancePage)

  const onClickRemoveNewsCard = (_id) => {
    const jwt = getToken()

    apiNews.deleteNews(_id, jwt)
      .then((news) => {
        const { _id } = news

        const arrWithoutDeletedCard = newsAllList.filter((item) => item._id !== _id)
        setNewsAllList(arrWithoutDeletedCard)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {

    apiNews.getNewsAll()
      .then((allNews) => setNewsAllList(allNews))
      .catch((error) => console.log(error))

    apiEvents.getEvents()
      .then((events) => {
        const timeNow = Date.now()
        const arrEventsWillBeFull = events.filter((event) => {
          const timeEvent = new Date(event.startTime).getTime()
          return timeNow < timeEvent
        })
        const sortArrEvents = arrEventsWillBeFull.sort((a, b) => {
          const dateA = + (new Date(a.startTime))
          const dateB = + (new Date(b.startTime))
          if (dateA > dateB) {
            return 1
          }
          if (dateA < dateB) {
            return -1
          } return null

        })
        setEventsList(sortArrEvents)
      })
      .catch((error) => console.log(error))
  }, [])

  const onClickRemoveEventCard = (_id) => {
    const jwt = getToken()

    apiEvents.deleteEvent(_id, jwt)
      .then((event) => {
        const arrWithoutDeletedCard = eventsList.filter((item) => item._id !== event._id)
        setEventsList(arrWithoutDeletedCard)
      })
      .catch((error) => console.log(error))
  }

  return (
    <main className="main">
      <Intro />
      <ActivityMain
        currentPath={currentPath}
      />
      <NewsMain
        newsList={newsAllList.reverse().slice(0, 4)}
        onClickRemoveNewsCard={onClickRemoveNewsCard}
        loggedIn={loggedIn}
      />
      <EventsMain
        eventsList={eventsList.slice(0, 3)}
        loggedIn={loggedIn}
        onClickRemove={onClickRemoveEventCard}
      />

      <DanceMain
        danceInfo={dancePage}
      />

      <ContactsMain />

    </main>
  )
}

export default Main
