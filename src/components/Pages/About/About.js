import React, { useEffect, useState } from 'react'
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

import { setToken, getToken, removeToken } from '../../../utils/Token'

// import AddDocument from '../../UI/popups/AddDocument/AddDocument'

import apiDocuments from '../../../utils/ApiDocument'

const About = ({
  workers,
  onClickAddWorker,
  onClickEditWorker,
  onClickRemoveWorker,
  loggedIn
}) => {

  const location = useLocation()
  const { pathname: currentPath } = location

  const pageInfo = contentTitle({ currentPath, infoPages })
  // console.log(pageInfo)
  const [allDocuments, setAllDocuments] = useState([])
  const [isPopupAddDocumentOpen, setIsPopupDocumentOpen] = useState(false)

  const [errorResponse, setErrorResponse] = useState("")

  const onClickAddDocument = () => {
    setIsPopupDocumentOpen(true)
  }
  const onClickEditDocument = (_id) => {
    console.log(`edit doc - ${_id}`)
  }
  const onClickRemoveDocument = (_id) => {
    console.log(`remove doc - ${_id}`)
  }

  const onSubmitHandlerAddDocument = (data) => {
    const jwt = getToken()
    apiDocuments.createDocument(data, jwt)
      .then((document) => console.log(document))
      .catch((error) => console.log(error))
    console.log(data)
  }

  useEffect(() => {
    apiDocuments.getDocuments()
      .then((documents) => {
        // console.log(documents)
        setAllDocuments(documents)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className={`about about_place_${pageInfo.pathName}`}>
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
            pageInfo={pageInfo}
            workers={workers}
            onClickAddWorker={onClickAddWorker}
            onClickEditWorker={onClickEditWorker}
            onClickRemoveWorker={onClickRemoveWorker}
            loggedIn={loggedIn}
          />
        </Route>
        <Route path="/about/documents">
          <Documents
            loggedIn={loggedIn}
            onClickAddDocument={onClickAddDocument}
            onClickEditDocument={onClickEditDocument}
            onClickRemoveDocument={onClickRemoveDocument}
            allDocuments={allDocuments}
            isPopupAddDocumentOpen={isPopupAddDocumentOpen}
            onClickBtnClose={() => setIsPopupDocumentOpen(false)}
            onSubmitHandlerAddDocument={onSubmitHandlerAddDocument}
            errorResponse={errorResponse}
          />
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
