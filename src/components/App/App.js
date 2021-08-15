import { React, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import AddWorker from '../AddWorker/AddWorker'
import api from '../../utils/ApiWorker'

import About from '../Pages/About/About'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  const [workers, setWorkers] = useState([])

  useEffect(() => {
    api.getWorkers()
      .then((workers) => setWorkers(workers))
      .catch((error) => console.log(error))
  }, [])

  const [isPopupAddWorkerOpen, setIsPopupAddWorkerOpen] = useState(false)
  const [errorAddWorker, setErrorAddWorker] = useState("")

  const onClickAddWorker = () => setIsPopupAddWorkerOpen(true)
  const onSubmitHandlerAddWorker = (workerData) => {
    // console.log(workerData)
    api.createWorker(workerData)
      // console.log(workerData)
      //     .then(() => setIsPopupAddWorkerOpen(false))
      .then((worker) => {
        setWorkers([...workers, worker])
        setIsPopupAddWorkerOpen(false)
      })
      // setWorkers([...workers, worker])
      .catch((e) => console.log('ошибка'))
    // .catch((e) => console.log(e))
  }

  return (
    <div className="app">

      <Header />


      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About
            workers={workers}
            onClickAddWorker={onClickAddWorker}
            loggedIn={loggedIn}
          />
        </Route>
      </Switch>
      <Footer />

      {/* <button type="button"
        onClick={() => setIsPopupAddWorkerOpen(true)}>Добавить работника</button> */}

      <AddWorker
        title="Новый сотрудник"
        submitBtnName="Добавить работника"
        onClickBtnClose={() => setIsPopupAddWorkerOpen(false)}
        isOpen={isPopupAddWorkerOpen}
        onSubmitHandlerAddWorker={onSubmitHandlerAddWorker}
        onClose={() => setIsPopupAddWorkerOpen(false)}
        errorMessage={errorAddWorker} />
    </div>
  )
}

export default App
