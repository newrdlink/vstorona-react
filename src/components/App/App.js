import { React, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import AddWorker from '../AddWorker/AddWorker'
import api from '../../utils/ApiWorker'

import About from '../Pages/About/About'

const App = () => {
  const [isPopupAddWorkerOpen, setIsPopupAddWorkerOpen] = useState(false)
  const [errorAddWorker, setErrorAddWorker] = useState("")

  const onSubmitHandlerAddWorker = (workerData) => {
    api.createWorker(workerData)
      .then(() => setIsPopupAddWorkerOpen(false))
      .catch((e) => setErrorAddWorker(e))
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
          <About />
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
