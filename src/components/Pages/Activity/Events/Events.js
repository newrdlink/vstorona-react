import React, { useEffect } from 'react'
import './Events.css'

import apiEvents from '../../../../utils/ApiEvents'

import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'

import EventsBox from './EventsBox/EventsBox'

const Events = ({ pageInfo, eventsList }) => {

  useEffect(() => {
    apiEvents.getEvents()
      .then((events) => console.log(events))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="events">
      <PageTitleShadow
        pageInfo={pageInfo} />
      <EventsBox
        eventsList={eventsList} />
    </main>
  )
}

export default Events
