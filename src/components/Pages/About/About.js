import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import CardsBox from '../../CardsBox/CardsBox'
import { aboutItems } from '../../../config/aboutItems'

import History from './History/History'
import Collective from './Сollective/Collective'

const About = () => {

  // const { path, url } = useRouteMatch();

  return (
    <div>
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

      </Switch>

    </div>
  )
}

export default About
