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

import HallPage from './Rent/Halls/HallPage/HallPage'

import apiHalls from '../../../utils/ApiHalls'

const Services = ({ loggedIn, currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })
  const [halls, setHalls] = useState([])
  const [update, setUpdate] = useState(false)

  const infoUpdated = () => {
    // console.log("info updated")
    setUpdate(!update)
  }

  useEffect(() => {
    apiHalls.getHalls()
      .then((halls) => setHalls(halls))
      .catch((error) => console.log(error))
  }, [update])

  // console.log(pageInfo)

  const isNotHall = (obj) => obj.pathName === "services" ||
    obj.pathName === "rent"


  return (
    <section className={`services ${isNotHall(pageInfo) && "services_place_hall"}`}>
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
        <Route exact path="/services/rent/:type">
          <HallPage
            hallItems={halls}
            loggedIn={loggedIn}
            infoUpdated={infoUpdated}
          />
        </Route>
        <Route exact path="/services/dance">
          <Dance
            currentPath={currentPath}
          />
        </Route>
      </Switch>
    </section>
  )
}

export default Services
