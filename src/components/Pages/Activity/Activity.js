import React, { useState } from 'react'
import './Activity.css'
import { Switch, Route, Link } from 'react-router-dom'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'

import CardsBox from '../../CardsBox/CardsBox'
import { activityItems } from '../../../config/activityItems'

import { infoPages } from '../../../config/infoPages'
import contentTitle from '../../../helpers/contentTitle'
// import { eventsItems } from '../../../config/temp/eventsItems'

import Events from './Events/Events'
import EventPage from './Events/EventPage/EventPage'

import Festivals from './Festivals/Festivals'
import NotFound from '../NotFound/NotFound'

import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'

import AddEvent from '../../backend/AddEvent/AddEvent'

import { useTitle } from '../../../helpers/createTitlePage'

const Activity = ({ loggedIn, currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })


  useTitle("Мероприятия")

  return (
    <section className={`activity ${pageInfo !== undefined && "activity_place_event"}`}>
      {loggedIn && currentPath === "/activity" ?
        <Link className="activity__add-event-button" to="/activity/add-event">Добавить событие</Link> :
        null
      }
      <NavPage
        currentPath={currentPath}
      />
      <PageTitle
        pageInfo={pageInfo}
      />
      <Switch>

        <Route exact path="/activity">
          <CardsBox
            currentPath={currentPath}
            arrayCards={activityItems} />
        </Route>

        <Route exact path="/activity/events">
          <Events
            pageInfo={pageInfo}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path="/activity/festivals">
          <Festivals
            pageInfo={pageInfo}
            loggedIn={loggedIn}
          />
        </Route>

        <Route path="/activity/festivals/:id">
          <EventPage />
        </Route>

        <Route path="/activity/events/:id">
          <EventPage />
        </Route>

        <ProtectedRoute
          loggedIn={loggedIn}
          component={AddEvent}
          path="/activity/add-event"
        />

        <Route to="*" component={NotFound} />

      </Switch>

    </section>
  )
}

export default Activity
