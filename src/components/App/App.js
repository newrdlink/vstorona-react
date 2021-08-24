import { React, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import AddWorker from '../UI/popups/AddWorker/AddWorker'
import EditWorker from '../UI/popups/EditWorker/EditWorker'
import SignIn from '../UI/popups/SignIn/SignIn'
import SignUp from '../UI/popups/SignUp/SignUp'
import api from '../../utils/ApiWorker'
import apiAuth from '../../utils/Auth'
import { setToken, getToken, removeToken } from '../../utils/Token'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import About from '../Pages/About/About'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [workers, setWorkers] = useState([])

  useEffect(() => {
    api.getWorkers()
      .then((workers) => setWorkers(workers))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    const jwt = getToken()
    if (jwt) {
      apiAuth.pullUserData(jwt)
        .then((userData) => {
          setCurrentUser(userData)
          setLoggedIn(true)
        })
        .catch((error) => console.log(error))
    }
  }, [])

  const [isPopupAddWorkerOpen, setIsPopupAddWorkerOpen] = useState(false)
  const [isPopupEditWorkerOpen, setIsPopupEditWorkerOpen] = useState({})
  const [isPopupSignInOpen, setIsPopupSignInOpen] = useState(false)
  const [isPopupSignUpOpen, setIsPopupSignUpOpen] = useState(false)
  const [isSignUpOk, setIsSignUpOk] = useState(false)
  // console.log(isPopupSignInOpen)
  const [errorResponse, setErrorResponse] = useState("")
  useEffect(() => {
    setTimeout(() => setErrorResponse(''), 5000)
  }, [errorResponse])

  const onClickAddWorker = () => setIsPopupAddWorkerOpen(true)
  const onSubmitHandlerAddWorker = (workerData) => {
    const jwt = getToken();

    api.createWorker(workerData, jwt)
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
    // console.log(workerData)
    const jwt = getToken();
    api.patchWorker(workerData, jwt)
      .then((worker) => {
        const indexUpdWorker = workers.findIndex(el => el._id === worker._id)
        workers.splice(indexUpdWorker, 1, worker)
        setWorkers(workers)
        setIsPopupEditWorkerOpen(false)
        // console.log(worker)
      })
      .catch((error) => console.log(error))
  }

  const onClickRemoveWorker = (workerId) => {
    const jwt = getToken()
    api.removeWorker(workerId, jwt)
      .then((worker) => {
        const newWorkers = workers.filter((w) => w._id !== workerId);
        setWorkers(newWorkers)
      })
      .catch((error) => console.log(error.message))
  }
  // const onClickSignInButton = () => setIsPopupSignInOpen(true)
  const onClickSignInButton = () => {
    setIsPopupSignInOpen(true)
  }

  const onClickSignOutButton = () => {
    removeToken()
    setLoggedIn(false)
    console.log('exit click')
  }

  const onClickBtnSignUp = () => {
    setIsPopupSignInOpen(false)
    setIsPopupSignUpOpen(true)
  }

  const onClickBtnSignIn = () => {
    setIsPopupSignInOpen(true)
    setIsPopupSignUpOpen(false)
  }

  const onSubmitHandlerSignIn = (data) => {
    apiAuth.signIn(data)
      .then((res) => {
        const { firstName, lastName, middleName, token } = res
        setToken(token)
        setIsPopupSignInOpen(false)
        setCurrentUser({ firstName, lastName, middleName })
        setLoggedIn(true)
      })
      .catch((error) => {
        console.log(error)
        setErrorResponse(error)
      })
  }

  const onSubmitHandlerSignUp = (data) => {
    apiAuth.signUp(data)
      .then((user) => {
        setIsPopupSignUpOpen(false)
        setIsPopupSignInOpen(true)
        setIsSignUpOk(true)
      }
      )
      .catch((error) => console.log(error))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">

        <Header
          onClickSignInButton={onClickSignInButton}
          loggedIn={loggedIn}
          onClickSignOutButton={onClickSignOutButton}
        />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About
              workers={workers}
              onClickAddWorker={onClickAddWorker}
              onClickEditWorker={onClickEditWorker}
              onClickRemove={onClickRemoveWorker}
              loggedIn={loggedIn}
            />
          </Route>
        </Switch>
        <Footer />

        <AddWorker
          title="Новый сотрудник"
          submitBtnName="Добавить работника"
          onClickBtnClose={() => setIsPopupAddWorkerOpen(false)}
          isOpen={isPopupAddWorkerOpen}
          onSubmitHandlerAddWorker={onSubmitHandlerAddWorker}
          onClose={() => setIsPopupAddWorkerOpen(false)}
        // errorMessage={errorAddWorker}
        />
        <EditWorker
          title="Изменить"
          submitBtnName="Изменить профиль"
          isOpen={Object.keys(isPopupEditWorkerOpen).length > 1}
          worker={isPopupEditWorkerOpen}
          onClickBtnClose={() => setIsPopupEditWorkerOpen({})}
          onClose={() => setIsPopupEditWorkerOpen({})}
          onSubmitHandlerEditWorker={onSubmitHandlerEditWorker}
        />
        <SignIn
          title="Авторизация"
          isOpen={isPopupSignInOpen}
          onClickBtnClose={() => setIsPopupSignInOpen(false)}
          onClose={() => setIsPopupSignInOpen(false)}
          submitBtnName="Войти"
          onSubmitHandlerSignIn={onSubmitHandlerSignIn}
          onClickBtnSignUp={onClickBtnSignUp}
          errorResponse={errorResponse}
        />
        <SignUp
          title="Регистрация"
          isOpen={isPopupSignUpOpen}
          onClickBtnClose={() => setIsPopupSignUpOpen(false)}
          onClose={() => setIsPopupSignUpOpen(false)}
          submitBtnName="Зарегистрироваться"
          onSubmitHandlerSignUp={onSubmitHandlerSignUp}
          onClickBtnSignIn={onClickBtnSignIn}
          isSignUpOk={isSignUpOk}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
