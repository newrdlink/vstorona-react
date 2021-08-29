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
import apiAchievements from '../../../utils/ApiAchievement'

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

  const [achievements, setAchievements] = useState([])
  const [isPopupAddAchievementOpen, setIsPopupAddAchievementsOpen] = useState({})
  const [isPopupEditAchievementOpen, setIsPopupEditAchievementsOpen] = useState({})

  const [errorResponse, setErrorResponse] = useState("")

  const isAreDocsInServer = Object.keys(isPopupAddDocumentOpen || {}).length > 0

  const onClickAddDocument = (_id) => {
    const arrWithDocumentClicked = allDocuments.filter((doc) => _id === doc._id)

    if (arrWithDocumentClicked.length === 0) {
      setIsPopupAddDocumentOpen({ forFirstDoc: '0000e7d4b9735e545cee0000' })
    } else {
      setIsPopupAddDocumentOpen(arrWithDocumentClicked[0])
    }
  }

  const onClickAddAchievement = (_id) => {
    const arrWithAchievementClicked = achievements.filter((doc) => _id === doc._id)

    if (arrWithAchievementClicked.length === 0) {
      setIsPopupAddAchievementsOpen({ forFirstDoc: '0000e7d4b9735e545cee0000' })
    } else {
      setIsPopupAddAchievementsOpen(arrWithAchievementClicked[0])
    }
  }

  const onSubmitHandlerAddAchievement = (data) => {
    const jwt = getToken()
    apiAchievements.createAchievement(data, jwt)
      .then((achievement) => {
        setAchievements([...achievements, achievement])
        setIsPopupAddAchievementsOpen({})
      })
      .catch((error) => console.log(error))
  }

  const onClickEditDocument = (_id) => {
    const editDocument = allDocuments.filter((doc) => _id === doc._id)
    setIsPopupEditDocumentOpen(editDocument)
  }

  const onClickEditAchievement = (_id) => {
    // console.log(_id)
    const editAchievement = achievements.filter((achievement) => _id === achievement._id)
    // console.log(editAchievement)
    setIsPopupEditAchievementsOpen(editAchievement)
  }

  const onClickRemoveDocument = (_id) => {
    // console.log(`remove doc - ${_id}`)
    const jwt = getToken()
    apiDocuments.deleteDocument(_id, jwt)
      .then(() => {
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

  const onSubmitHandlerEditAchievement = (data) => {
    const jwt = getToken()
    apiAchievements.patchAchievement(data, jwt)
      .then((achievement) => {
        const indexUpdAchievement = achievements.findIndex(el => el._id === achievement._id)
        achievements.splice(indexUpdAchievement, 1, achievement)
        setAchievements(achievements)
        setIsPopupEditAchievementsOpen({})
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
    apiAchievements.getAchievements()
      .then((achievements) => setAchievements(achievements))
      .catch((error) => console.log(error))
  }, [])

  const closeEditAddPopups = () => {
    setIsPopupAddDocumentOpen({})
    setIsPopupEditDocumentOpen({})
    setIsPopupAddAchievementsOpen({})
    setIsPopupEditAchievementsOpen({})
  }
  // console.log(pageInfo.pathName)
  const onClickRemoveEchievement = (_id) => {
    const jwt = getToken()
    apiAchievements.deleteAchievement(_id, jwt)
      .then(() => {
        const newAchievements = achievements.filter((achievement) => achievement._id !== _id)
        setAchievements(newAchievements)
      })
      .catch((error) => console.log(error))
  }

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
          <Achievements
            loggedIn={loggedIn}
            onClickAddDocument={(_id) => onClickAddAchievement(_id)}
            onClickEditDocument={onClickEditAchievement}
            onClickRemoveDocument={onClickRemoveEchievement}
            onClickBtnClose={closeEditAddPopups}
            isPopupAddAchievementOpen={Object.keys(isPopupAddAchievementOpen).length > 0 && isPopupAddAchievementOpen}
            isPopupEditAchievementOpen={Object.keys(isPopupEditAchievementOpen).length > 0 && isPopupEditAchievementOpen}
            onSubmitHandlerAddAchievement={onSubmitHandlerAddAchievement}
            onSubmitHandlerEditAchievement={onSubmitHandlerEditAchievement}
            achievements={achievements}
          />
        </Route>
        <Route path="/about/questionnaire">
          <Questionnaire />
        </Route>
      </Switch>
    </div>
  )
}

export default About
