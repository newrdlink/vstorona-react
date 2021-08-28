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

import { getToken, } from '../../../utils/Token'

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
  const [isPopupAddDocumentOpen, setIsPopupAddDocumentOpen] = useState({})
  const [isPopupEditDocumentOpen, setIsPopupEditDocumentOpen] = useState({})

  const [errorResponse, setErrorResponse] = useState("")

  // console.log(Object.keys(isPopupAddDocumentOpen).length > 0)

  const isAreDocsInServer = Object.keys(isPopupAddDocumentOpen || {}).length > 0

  const onClickAddDocument = (_id) => {
    const arrWithDocumentClicked = allDocuments.filter((doc) => _id === doc._id)
    // console.log(arrWithDocumentClicked)
    if (arrWithDocumentClicked.length === 0) {
      // console.log(arrWithDocumentClicked)
      setIsPopupAddDocumentOpen({ forFirstDoc: '0000e7d4b9735e545cee0000' })
    } else {
      // console.log(2)
      setIsPopupAddDocumentOpen(arrWithDocumentClicked[0])
    }
    // console.log(arrWithDocumentClicked)
    // console.log(2, documentClicked)
  }
  const onClickEditDocument = (_id) => {
    const editDocument = allDocuments.filter((doc) => _id === doc._id)
    setIsPopupEditDocumentOpen(editDocument)
    // console.log(`edit doc - ${_id}`)
  }
  const onClickRemoveDocument = (_id) => {
    // console.log(`remove doc - ${_id}`)
    const jwt = getToken()

    apiDocuments.deleteDocument(_id, jwt)
      .then((document) => {
        const newDocuments = allDocuments.filter((doc) => doc._id !== _id)
        setAllDocuments(newDocuments)
      })
      .catch((error) => console.log(error))
  }

  const onSubmitHandlerAddDocument = (data) => {
    const jwt = getToken()
    apiDocuments.createDocument(data, jwt)
      .then((document) => {
        setAllDocuments([...allDocuments, document])
        setIsPopupAddDocumentOpen({})
        // console.log(document)
      })
      .catch((error) => {
        console.log(error)
        setErrorResponse(error)
      })
    // console.log(data)
  }

  const onSubmitHandlerEditDocument = (data) => {
    // console.log(data)
    const jwt = getToken()
    apiDocuments.patchDocument(data, jwt)
      .then((document) => {
        const indexUpdDocument = allDocuments.findIndex(el => el._id === document._id)
        allDocuments.splice(indexUpdDocument, 1, document)
        setAllDocuments(allDocuments)
        setIsPopupEditDocumentOpen({})
      })
      .catch((error) => {
        console.log(error)
        setErrorResponse(error)
      })
  }

  useEffect(() => {
    apiDocuments.getDocuments()
      .then((documents) => {
        // console.log(documents)
        setAllDocuments(documents)
      })
      .catch((error) => console.log(error))
  }, [])

  const closeEditAddPopups = () => {
    setIsPopupAddDocumentOpen({})
    setIsPopupEditDocumentOpen({})
  }
  // console.log(pageInfo.pathName)

  return (
    <div className={`about about_place_${pageInfo.pathName}`}>
      <NavPage />
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
            onClickAddDocument={(_id) => onClickAddDocument(_id)}
            onClickEditDocument={onClickEditDocument}
            onClickRemoveDocument={onClickRemoveDocument}
            allDocuments={allDocuments}
            isPopupAddDocumentOpen={isAreDocsInServer && isPopupAddDocumentOpen}
            isPopupEditDocumentOpen={Object.keys(isPopupEditDocumentOpen).length > 0 && isPopupEditDocumentOpen}
            onSubmitHandlerEditDocument={onSubmitHandlerEditDocument}
            editDocument={isPopupEditDocumentOpen}
            onClickBtnClose={closeEditAddPopups}
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
