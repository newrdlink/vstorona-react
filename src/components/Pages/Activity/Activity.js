import React from 'react'
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
import AddEvent from '../../backend/AddEvent/AddEvent'

const Activity = ({ loggedIn, currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })

  return (
    <section className="activity">
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
          // eventsList={eventsItems}
          />
        </Route>

        <Route path="/activity/add-event">
          <AddEvent />
        </Route>

      </Switch>
    </section>
  )
}

export default Activity
