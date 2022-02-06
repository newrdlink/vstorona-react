import React from 'react'
import './EventsMain.css'

import EventsBox from '../../Pages/Activity/Events/EventsBox/EventsBox'
import MainTitle from '../MainTitle/MainTitle'
import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import SingleLinkOnPage from '../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'

const EventsMain = ({ eventsList, loggedIn, onClickRemove }) => {

  const isMobileDevice = window.screen.availWidth <= 450

  return (
    <section className="events-main">
      <PageTitleShadow
        place="events-main"
        title="афиша мероприятий"
        startPosition={isMobileDevice ? -4500 : -2500}
      />
      <MainTitle
        title="афиша мероприятий"
        place="events-main"
      />
      <EventsBox
        eventsList={eventsList}
        loggedIn={loggedIn}
        onClickRemove={onClickRemove}
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
