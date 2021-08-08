import React from 'react'
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'
import CardsBox from '../../CardsBox/CardsBox'
import { aboutItems } from '../../../config/aboutItems'
import NavPage from '../../NavPage/NavPage'

import History from './History/History'
import Collective from './Сollective/Collective'
import Documents from './Documents/Documents'
import Achievements from './Achievements/Achievements'
import Questionnaire from './Questionnaire/Questionnaire'

const About = () => {
  // const location = useLocation()
  // const { path, url } = useRouteMatch()

  // const { path, url } = useRouteMatch();
  return (
    <div>
      <NavPage />
      <Switch>
        <Route exact path="/about">
          <CardsBox arrayCards={aboutItems} />
        </Route>
        <Route path="/about/history">
          <History />
        </Route>
        <Route path="/about/collective">
          <Collective />
        </Route>
        <Route path="/about/documents">
          <Documents />
        </Route>
        <Route path="/about/achievements">
          <Achievements />
        </Route>
        <Route path="/about/questionnaire">
          <Questionnaire />
        </Route>
      </Switch>
    </div>
  )
}

export default About
