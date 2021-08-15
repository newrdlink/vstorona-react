import React from 'react'
import './About.css'
import { Switch, Route, useLocation } from 'react-router-dom'
import CardsBox from '../../CardsBox/CardsBox'
import { aboutItems } from '../../../config/aboutItems'
import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'

import History from './History/History'
import Collective from './Сollective/Collective'
import Documents from './Documents/Documents'
import Achievements from './Achievements/Achievements'
import Questionnaire from './Questionnaire/Questionnaire'

const About = () => {
  const location = useLocation()
  const { pathname: currentPath } = location

  const pageInfo = contentTitle({ currentPath, infoPages })

  return (
    <div className="about">
      <NavPage />
      {/* <h2 className="about__title">о нас</h2> */}
      <PageTitle
        pageInfo={pageInfo}
      />
      <Switch>
        <Route exact path="/about">
          <CardsBox arrayCards={aboutItems} />
        </Route>
        <Route path="/about/history">
          <History
            pageInfo={pageInfo}
          />
        </Route>
        <Route path="/about/collective">
          <Collective
            pageInfo={pageInfo} />
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
