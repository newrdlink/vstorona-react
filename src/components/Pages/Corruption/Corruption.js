import React from 'react'
import './Corruption.css'
import { Switch, Route } from 'react-router'

import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'
import DocContainer from './DocContainer/DocContainer'
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddAntiCorrDoc from '../../backend/AddAntiCorrDoc/AddAntiCorrDoc'
import api from '../../../utils/ApiAntiCorrDocument'
import { getToken } from '../../../utils/Token'


const Corruption = ({ currentPath, listDocs = [], loggedIn, dataUpdate }) => {
  const pageInfo = contentTitle({ currentPath, infoPages })

  const typeDocuments = listDocs.reduce((arr, item) => {
    if (!arr.includes(item.type)) arr.push(item.type)
    return arr
  }, [])

  const removeDoc = (id) => {
    const jwt = getToken()
    console.log(id)
    api.deleteAntiCorrDocument(id, jwt)
      .then((res) => {
        console.log(res)
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
            typeDocuments.map((typeDoc) => {
              const arr = listDocs.filter(el => el.type === typeDoc)
              return <DocContainer items={arr} key={typeDoc} loggedIn={loggedIn} removeDoc={removeDoc} />
            })
          }

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
