import { React, useState } from 'react'
import './App.css'
import AddWorker from '../AddWorker/AddWorker'

const App = () => {
  const [isPopupAddWorkerOpen, setIsPopupAddWorkerOpen] = useState(false)

  return (
    <div className="app">
      <p className="app__title">администрация</p>
      <footer>

      </footer>
      <button type="button" onClick={() => setIsPopupAddWorkerOpen(true)}>Добавить работника</button>
      <AddWorker
        title="Новый сотрудник"
        submitBtnName="Добавить работника"
        onClickBtnClose={() => setIsPopupAddWorkerOpen(false)}
        isOpen={isPopupAddWorkerOpen}
        onClose={() => setIsPopupAddWorkerOpen(false)} />
    </div>
  )
}

export default App
