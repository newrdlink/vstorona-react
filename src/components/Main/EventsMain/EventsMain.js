import React from 'react'
import './EventsMain.css'

import EventsBox from '../../Pages/Activity/Events/EventsBox/EventsBox'
import MainTitle from '../MainTitle/MainTitle'
import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import SingleLinkOnPage from '../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'

const EventsMain = ({ eventsList }) => {

  return (
    <section className="events-main">
      <PageTitleShadow
        place="events-main"
        title="афиша мероприятий"
        startPosition={-1800}
      />
      <MainTitle
        title="афиша мероприятий"
        place="events-main"
      />
      <EventsBox
        eventsList={eventsList}
      />
      <SingleLinkOnPage
        to="activity/events"
        bodyName="все мероприятия"
        place="events-main"
        colorArrow="#974269"
      />
    </section>
  )
}

export default EventsMain
