import React from 'react'
import './Events.css'

import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'

import EventsBox from './EventsBox/EventsBox'

const Events = ({ pageInfo }) => {
  return (
    <main className="events">
      <PageTitleShadow pageInfo={pageInfo} />
      <EventsBox />
    </main>
  )
}

export default Events
