import React from 'react'
import './Corruption.css'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'
// import DocContainer from './DocContainer/DocContainer'
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddAntiCorrDoc from '../../backend/AddAntiCorrDoc/AddAntiCorrDoc'
import api from '../../../utils/ApiAntiCorrDocument'
import { getToken } from '../../../utils/Token'

// import MyRoute from './MyLink/MyLink'
import LinksBox from './LinksBox/LinksBox'

import Info from './Info/Info'
import FormsDoc from './FormsDoc/FormsDoc'
import Intelligence from './Intelligence/Intelligence'
import Commission from './Сommission/Сommission'
import Materials from './Materials/Materials'
import Feedback from './Feedback/Feedback'
import CommonActs from './CommonActs/CommonActs'

import LiabilityMeasures from './LiabilityMeasures/LiabilityMeasures'
// import { useRouteMatch } from 'react-router-dom'

const Corruption = ({ currentPath, listDocs = [], loggedIn, dataUpdate }) => {
  const pageInfo = contentTitle({ currentPath, infoPages })
  const { path } = useRouteMatch()
  // console.log(path)

  const typeDocuments = listDocs.reduce((arr, item) => {
    if (!arr.includes(item.type)) arr.push(item.type)
    return arr
  }, [])

  const sortedTypesDoc = typeDocuments.reduce((arr, el) => {
    if (el.startsWith('Нор')) arr.push({ id: 1, type: el, path: '/common' })
    if (el.startsWith('Мет')) arr.push({ id: 2, type: el, path: '/materials' })
    if (el.startsWith('Фор')) arr.push({ id: 3, type: el, path: '/forms' })
    if (el.startsWith('Све')) arr.push({ id: 4, type: el, path: '/intelligence' })
    if (el.startsWith('Ком')) arr.push({ id: 5, type: el, path: '/commission' })
    if (el.startsWith('Об')) arr.push({ id: 6, type: el, path: '/feedback' })
    if (el.startsWith('Мер')) arr.push({ id: 7, type: el, path: '/measures' })
    if (el.startsWith('Инф')) arr.push({ id: 8, type: el, path: '/info' })

    return arr
  }, [])

  sortedTypesDoc.sort((a, b) => a.id > b.id ? 1 : -1)

  const sortedArr = []

  sortedTypesDoc.forEach((el) => sortedArr.push(el.type))

  const removeDoc = (id) => {
    const jwt = getToken()

    api.deleteAntiCorrDocument(id, jwt)
      .then((res) => {
        dataUpdate()
      })
      .catch((error) => console.log(error))
  }
  // console.log(listDocs)
  return (
    <section className="corruption">
      <NavPage currentPath={currentPath} />
      <PageTitle pageInfo={pageInfo} />
      <Switch>
        {/* <Route exact path="/anti-corruption">
          {
            sortedArr.map((typeDoc) => {
              const arr = listDocs.filter(el => el.type === typeDoc)
              return <DocContainer items={arr} key={typeDoc} loggedIn={loggedIn} removeDoc={removeDoc} />
            })
          }
        </Route> */}
        <Route exact path="/anti-corruption">
          <LinksBox links={sortedTypesDoc} path={path} />
          {/* {
            sortedTypesDoc.map((el) => <MyRoute key={el.path} path={path + el.path} name={el.type} />)
          } */}
        </Route>
        <Route path="/anti-corruption/forms">
          <FormsDoc
            // docs={listDocs.filter((el) => el.type === "Формы документов для заполнения")}
            docs={[]}
          />
        </Route>
        <Route path="/anti-corruption/intelligence">
          <Intelligence
            // docs={listDocs.filter((el) => el.type === "Формы документов для заполнения")}
            docs={[]}
          />
        </Route>
        <Route path="/anti-corruption/commission">
          <Commission
            // docs={listDocs.filter((el) => el.type === "Формы документов для заполнения")}
            docs={[]}
          />
        </Route>
        <Route path="/anti-corruption/info">
          <Info
            // docs={listDocs.filter((el) => el.type === "Формы документов для заполнения")}
            docs={[]}
          />
        </Route>
        <Route path="/anti-corruption/materials">
          <Materials
            // docs={listDocs.filter((el) => el.type === "Формы документов для заполнения")}
            docs={[]}
          />
        </Route>
        <Route path="/anti-corruption/feedback">
          <Feedback
            // docs={listDocs.filter((el) => el.type === "Формы документов для заполнения")}
            docs={[]}
          />
        </Route>
        <Route path="/anti-corruption/common">
          <CommonActs
            // docs={listDocs.filter((el) => el.type === "Формы документов для заполнения")}
            docs={[]}
          />
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
