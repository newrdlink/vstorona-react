import React, { useState, useEffect } from 'react'
import './Festivals.css'

import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'
import EventsBox from '../Events/EventsBox/EventsBox'

import apiEvents from '../../../../utils/ApiEvents'


const Festivals = ({ pageInfo }) => {
  const [eventsList, setEventsList] = useState([])

  useEffect(() => {
    apiEvents.getEvents()
      .then((events) => {
        const listFestivalEvents = events.filter((el) => el.type === "festival")
        const sortArrEvents = listFestivalEvents.sort((a, b) => {
          const dateA = + (new Date(a.startTime))
          const dateB = + (new Date(b.startTime))
          if (dateA > dateB) {
            return -1
          }
          if (dateA < dateB) {
            return 1
          } return null
        })
        setEventsList(sortArrEvents)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="festivals">
      <PageTitleShadow
        pageInfo={pageInfo}
        startPosition={-500}
        place="festivals"
      />
      <EventsBox
        eventsList={eventsList}
      />
    </main>
  )
}

export default Festivals
