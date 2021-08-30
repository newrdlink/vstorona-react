import React from 'react'
import './Collective.css'

import WorkersBox from '../../../WorkersBox/WorkersBox'
import AddWorker from '../../../UI/popups/AddWorker/AddWorker'
import EditWorker from '../../../UI/popups/EditWorker/EditWorker'

const Collective = ({
  pageInfo,
  workers,
  isPopupAddWorkerOpen,
  isPopupEditWorkerOpen,
  onSubmitHandlerEditWorker,
  onSubmitHandlerAddWorker,
  onClickAddWorker,
  onClickEditWorker,
  onClickRemoveWorker,
  onClickBtnClose,
  loggedIn }) => {
  // console.log(pageInfo)
  return (
    <section className="collective">
      <WorkersBox
        workers={workers}
        onClickAdd={onClickAddWorker}
        onClickEdit={onClickEditWorker}
        onClickRemove={onClickRemoveWorker}
        loggedIn={loggedIn}
      />
      <AddWorker
        title="Новый сотрудник"
        submitBtnName="Добавить работника"
        onClickBtnClose={onClickBtnClose}
        isOpen={isPopupAddWorkerOpen}
        onSubmitHandlerAddWorker={onSubmitHandlerAddWorker}
        onClose={onClickBtnClose}
      // errorMessage={errorAddWorker}
      />
      <EditWorker
        title="Изменить"
        submitBtnName="Изменить профиль"
        isOpen={Object.keys(isPopupEditWorkerOpen).length > 1}
        worker={isPopupEditWorkerOpen}
        onClickBtnClose={onClickBtnClose}
        onClose={onClickBtnClose}
        onSubmitHandlerEditWorker={onSubmitHandlerEditWorker}
      />
    </section>
  )
}

export default Collective
