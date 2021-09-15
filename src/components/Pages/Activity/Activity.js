import React from 'react'
import './Activity.css'
import { Switch, Route } from 'react-router-dom'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'

import CardsBox from '../../CardsBox/CardsBox'
import { activityItems } from '../../../config/activityItems'

import { infoPages } from '../../../config/infoPages'
import contentTitle from '../../../helpers/contentTitle'
import { eventsItems } from '../../../config/temp/eventsItems'

import Events from './Events/Events'

const Activity = ({ loggedIn, currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })

  return (
    <section className="activity">
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
            eventsList={eventsItems}
          />
        </Route>
      </Switch>

    </section>
  )
}

export default Activity
