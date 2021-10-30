import { React, useState, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import SignIn from '../UI/popups/SignIn/SignIn'
import SignUp from '../UI/popups/SignUp/SignUp'

import apiAuth from '../../utils/Auth'
import apiCollectives from '../../utils/ApiCollectives'
import { setToken, getToken, removeToken } from '../../utils/Token'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
// import { infoPages } from '../../config/infoPages';

import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Activity from '../Pages/Activity/Activity'
import News from '../Pages/News/News'

import TopMenu from '../TopMenu/TopMenu'
import TopMenuCollectives from '../TopMenuCollectives/TopMenuCollectives'
// import { collectivesItems } from '../../config/temp/collectivesItems'
import Collectives from '../Pages/Collectives/Collectives'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const [isTopMenuActive, setIsTopMenuActive] = useState(false)
  const [isTopMenuNoActive, setIsTopMenuNoActive] = useState(false)

  const [isMenuCollActive, setIsMenuCollActive] = useState(false)
  const [isMenuCollNoActive, setIsMenuCollNoActive] = useState(false)

  const [collectives, setCollectives] = useState([])

  const onClickLinkInTopMenu = () => setIsTopMenuActive(!isTopMenuActive)

  const handlerTopMenu = () => {
    setIsTopMenuActive(!isTopMenuActive)
    setIsTopMenuNoActive(true)
  }

  const handlerCollMenu = () => {
    setIsMenuCollActive(false)
    setIsMenuCollNoActive(true)
  }

  const onClickOpenTopMenu = () => {
    setIsTopMenuActive(true)
    setIsTopMenuNoActive(false)
  }

  const onClickOpenCollMenu = () => {
    setIsMenuCollActive(true)
    setIsMenuCollNoActive(false)
  }

  const location = useLocation()
  const { pathname: currentPath } = location

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

    apiCollectives.getCollectives()
      .then((collectives) => setCollectives(collectives))
      .catch((error) => console.log(error))
  }, [])

  const [isPopupSignInOpen, setIsPopupSignInOpen] = useState(false)
  const [isPopupSignUpOpen, setIsPopupSignUpOpen] = useState(false)
  const [isSignUpOk, setIsSignUpOk] = useState(false)
  const [errorResponse, setErrorResponse] = useState("")

  useEffect(() => {
    setTimeout(() => setErrorResponse(''), 5000)

  }, [errorResponse])

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
      <div className="root">
        <div className="app">
          <TopMenu
            onClickLink={onClickLinkInTopMenu}
            isActive={isTopMenuActive}
            isTopMenuNoActive={isTopMenuNoActive}
            onClickBtnClose={handlerTopMenu}
          />
          <TopMenuCollectives
            isActive={isMenuCollActive}
            isNoActive={isMenuCollNoActive}
            onClickBtnClose={handlerCollMenu}
            collectivesItems={collectives}
          // onClickLinkCollective={onClickLinkCollective}
          />
          <Header
            onClickSignInButton={onClickSignInButton}
            loggedIn={loggedIn}
            onClickSignOutButton={onClickSignOutButton}
            onClickOpenTopMenu={onClickOpenTopMenu}
            onClickOpenCollMenu={onClickOpenCollMenu}
          />
          <Switch>
            <Route exact path="/">
              <Main
                currentPath={currentPath}
                loggedIn={loggedIn}
                openCollectiveMenu={onClickOpenCollMenu}
              />
            </Route>
            <Route path="/about">
              <About
                loggedIn={loggedIn}
                currentPath={currentPath}
              />
            </Route>
            <Route path="/services">
              <Services
                loggedIn={loggedIn}
                currentPath={currentPath}
              />
            </Route>
            <Route path="/activity">
              <Activity
                loggedIn={loggedIn}
                currentPath={currentPath}
              />
            </Route>
            <Route path="/news">
              <News
                currentPath={currentPath}
                loggedIn={loggedIn}
              />
            </Route>

            <Route path="/collectives">
              <Collectives
                currentPath={currentPath}
                loggedIn={loggedIn}
                collectivesItems={collectives}
              />
            </Route>

          </Switch>
          <Footer />
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
            errorResponse={errorResponse}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
