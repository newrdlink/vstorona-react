import React from 'react'
import './Corruption.css'
import { Switch, Route, Link } from 'react-router-dom'
import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'
import DocContainer from './DocContainer/DocContainer'
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddAntiCorrDoc from '../../backend/AddAntiCorrDoc/AddAntiCorrDoc'
import api from '../../../utils/ApiAntiCorrDocument'
import { getToken } from '../../../utils/Token'

import LiabilityMeasures from './LiabilityMeasures/LiabilityMeasures'

const Corruption = ({ currentPath, listDocs = [], loggedIn, dataUpdate }) => {
  const pageInfo = contentTitle({ currentPath, infoPages })

  const typeDocuments = listDocs.reduce((arr, item) => {
    if (!arr.includes(item.type)) arr.push(item.type)
    return arr
  }, [])

  const sortedTypesDoc = typeDocuments.reduce((arr, el) => {
    if (el.startsWith('Нор')) arr.push({ id: 1, type: el })
    if (el.startsWith('Мет')) arr.push({ id: 2, type: el })
    if (el.startsWith('Фор')) arr.push({ id: 3, type: el })
    if (el.startsWith('Све')) arr.push({ id: 4, type: el })
    if (el.startsWith('Ком')) arr.push({ id: 5, type: el })
    if (el.startsWith('Об')) arr.push({ id: 6, type: el })
    if (el.startsWith('Мер')) arr.push({ id: 7, type: el })
    if (el.startsWith('Инф')) arr.push({ id: 8, type: el })

    return arr
  }, [])

  sortedTypesDoc.sort((a, b) => a.id > b.id ? 1 : -1)

  const sortedArr = []

  sortedTypesDoc.forEach((el) => sortedArr.push(el.type))

  const removeDoc = (id) => {
    const jwt = getToken()
    // console.log(id)
    api.deleteAntiCorrDocument(id, jwt)
      .then((res) => {
        // console.log(res)
        dataUpdate()
      })
      .catch((error) => console.log(error))
  }
  // console.log(typeDocuments)
  return (
    <section className="corruption">
      <NavPage currentPath={currentPath} />
      <PageTitle pageInfo={pageInfo} />
      <Switch>
        <Route exact path="/anti-corruption">
          {
            sortedArr.map((typeDoc) => {
              const arr = listDocs.filter(el => el.type === typeDoc)
              return <DocContainer items={arr} key={typeDoc} loggedIn={loggedIn} removeDoc={removeDoc} />
            })
          }
          {/* <Link to="/anti-corruption/measures" className="corruption__link-measures">меры юридической ответственности</Link> */}

        </Route>
        <Route path="/anti-corruption/measures">
          <LiabilityMeasures />
        </Route>

        <ProtectedRoute
          path="/anti-corruption/add-anticorrdoc"
          component={AddAntiCorrDoc}
          loggedIn={loggedIn}
          dataUpdate={dataUpdate}
        />
      </Switch>
    </section>
  )
}

export default Corruption
