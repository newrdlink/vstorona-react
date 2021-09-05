import React, { useEffect, useState } from 'react'
import './Services.css'
import { Switch, Route } from 'react-router-dom'

import CardsBox from '../../CardsBox/CardsBox'
import { serviceItems } from '../../../config/serviceItems'

import { infoPages } from '../../../config/infoPages'
import contentTitle from '../../../helpers/contentTitle'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'

import Dance from './Dance/Dance'
import Rent from './Rent/Rent'

// import Halls from './Rent/Halls/Halls'
import HallPage from './Rent/Halls/HallPage/HallPage'
// import { hallItems } from '../../../config/temp/hallItems'

import apiHalls from '../../../utils/ApiHalls'

const Services = ({ loggedIn, currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })
  const [halls, setHalls] = useState([])

  useEffect(() => {
    apiHalls.getHalls()
      .then((halls) => setHalls(halls))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="services">
      <NavPage
        currentPath={currentPath}
      />
      <PageTitle
        pageInfo={pageInfo}
      />
      <Switch>
        <Route exact path="/services">
          <CardsBox
            currentPath={currentPath}
            arrayCards={serviceItems} />
        </Route>
        <Route exact path="/services/rent">
          <Rent
            currentPath={currentPath}
          />
        </Route>

        <Route path="/services/rent/:type">
          <HallPage
            hallItems={halls}
          // currentPath={currentPath}
          />
        </Route>

        <Route path="/dance">
          <Dance
            currentPath={currentPath}
          />
        </Route>
      </Switch>
    </section>
  )
}

export default Services
