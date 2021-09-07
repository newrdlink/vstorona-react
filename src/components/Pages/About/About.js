import React, { useEffect, useState } from 'react'
import './About.css'
import { Switch, Route } from 'react-router-dom'
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
import apiWorker from '../../../utils/ApiWorker'
import apiDocuments from '../../../utils/ApiDocument'
import apiAchievements from '../../../utils/ApiAchievement'

const About = ({ loggedIn, currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })

  const [workers, setWorkers] = useState([])
  const [isPopupAddWorkerOpen, setIsPopupAddWorkerOpen] = useState(false)
  const [isPopupEditWorkerOpen, setIsPopupEditWorkerOpen] = useState({})
  const [allDocuments, setAllDocuments] = useState([])
  const [isPopupAddDocumentOpen, setIsPopupAddDocumentOpen] = useState({})
  const [isPopupEditDocumentOpen, setIsPopupEditDocumentOpen] = useState({})

  const [achievements, setAchievements] = useState([])
  const [isPopupAddAchievementOpen, setIsPopupAddAchievementsOpen] = useState({})
  const [isPopupEditAchievementOpen, setIsPopupEditAchievementsOpen] = useState({})

  const [errorResponse, setErrorResponse] = useState("")

  const isAreDocsInServer = Object.keys(isPopupAddDocumentOpen || {}).length > 0

  useEffect(() => {
    apiWorker.getWorkers()
      .then((workers) => setWorkers(workers))
      .catch((error) => console.log(error))
  }, [])

  const onClickAddWorker = () => setIsPopupAddWorkerOpen(true)

  const onSubmitHandlerAddWorker = (workerData) => {
    const jwt = getToken();

    apiWorker.createWorker(workerData, jwt)
      .then((worker) => {
        setWorkers([...workers, worker])
        setIsPopupAddWorkerOpen(false)
      })
      .catch((e) => console.log('ошибка'))
  }

  const onClickEditWorker = (id) => {
    // take editing worker
    const editWorker = workers.filter((item) => id === item._id)
    // sending worker to editForm for inputs
    setIsPopupEditWorkerOpen(editWorker[0])
  }
  const onSubmitHandlerEditWorker = (workerData) => {
    const jwt = getToken();

    apiWorker.patchWorker(workerData, jwt)
      .then((worker) => {
        const indexUpdWorker = workers.findIndex(el => el._id === worker._id)
        workers.splice(indexUpdWorker, 1, worker)
        setWorkers(workers)
        setIsPopupEditWorkerOpen(false)
      })
      .catch((error) => console.log(error))
  }

  const onClickRemoveWorker = (workerId) => {
    const jwt = getToken()

    apiWorker.removeWorker(workerId, jwt)
      .then((worker) => {
        const newWorkers = workers.filter((w) => w._id !== workerId);
        setWorkers(newWorkers)
      })
      .catch((error) => console.log(error.message))
  }

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
    const editAchievement = achievements.filter((achievement) => _id === achievement._id)
    setIsPopupEditAchievementsOpen(editAchievement)
  }

  const onClickRemoveDocument = (_id) => {
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
      })
      .catch((error) => {
        console.log(error)
        setErrorResponse(error)
      })
  }

  const onSubmitHandlerEditDocument = (data) => {
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
    setIsPopupAddWorkerOpen(false)
    setIsPopupEditWorkerOpen({})
  }

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
    <section className={`about about_place_${pageInfo.pathName}`}>
      <NavPage
        currentPath={currentPath} />
      <PageTitle
        pageInfo={pageInfo}
      />
      <Switch>
        <Route exact path="/about">
          <CardsBox
            currentPath={currentPath}
            arrayCards={aboutItems} />
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
            isPopupAddWorkerOpen={isPopupAddWorkerOpen}
            isPopupEditWorkerOpen={isPopupEditWorkerOpen}
            onSubmitHandlerAddWorker={onSubmitHandlerAddWorker}
            onSubmitHandlerEditWorker={onSubmitHandlerEditWorker}
            onClose={() => setIsPopupAddWorkerOpen(false)}
            onClickBtnClose={closeEditAddPopups}
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
    </section>
  )
}

export default About
