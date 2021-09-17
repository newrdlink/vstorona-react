import React from 'react'
import './Events.css'

import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'

import EventsBox from './EventsBox/EventsBox'

const Events = ({ pageInfo, eventsList }) => {
  // console.log(eventsList)
  return (
    <main className="events">
      <PageTitleShadow
        pageInfo={pageInfo} />
      <EventsBox
        // pageInfo={pageInfo}
        eventsList={eventsList} />
    </main>
  )
}

export default Events
