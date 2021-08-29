import React from 'react'
import './Achievements.css'

import ButtonAddDocument from '../../../UI/buttons/ButtonAddDocument/ButtonAddDocument'
import AddAchievement from '../../../UI/popups/AddAchievement/AddAchievement'

import EditAchievement from '../../../UI/popups/EditAchievement/EditAchievement'

import DocBox from '../Documents/DocBox/DocBox'

const Achievements = ({
  onClickAddDocument,
  isPopupAddAchievementOpen,
  isPopupEditAchievementOpen,
  onClickBtnClose,
  onSubmitHandlerAddAchievement,
  onSubmitHandlerEditAchievement,
  errorResponse,
  achievements,
  loggedIn,
  onClickEditDocument,
  onClickRemoveDocument
}) => {

  const arrayAllTypeAchievements = achievements.reduce((arr, item) => {
    if (!arr.includes(item.type)) {
      arr.push(item.type)
    }
    return arr
  }, [])

  arrayAllTypeAchievements.sort((a, b) => {
    if (Number.parseInt(a) > Number.parseInt(b)) {
      return -1
    }
    return 1
  })
  // console.log(isPopupAddAchievementOpen)
  // console.log(arrayAllTypeAchievements)
  return (
    <section className="achievements">
      {
        loggedIn && achievements.length === 0 ?
          <ButtonAddDocument
            onClick={onClickAddDocument}
          /> : null}
      {
        arrayAllTypeAchievements.map((type) => {
          const arrDoc = achievements.filter((item) => item.type === type)
          return <DocBox
            arrDoc={arrDoc}
            key={arrDoc[0]._id}
            loggedIn={loggedIn}
            onClickAdd={onClickAddDocument}
            onClickEdit={onClickEditDocument}
            onClickRemove={onClickRemoveDocument}

          />
        })
      }
      <AddAchievement
        title="Новое достижение"
        isOpen={isPopupAddAchievementOpen}
        submitBtnName="Добавить достижение"
        onSubmitHandlerAddAchievement={onSubmitHandlerAddAchievement}
        onClose={onClickBtnClose}
        errorResponse={errorResponse}
      />
      <EditAchievement
        isOpen={isPopupEditAchievementOpen}
        title="Изменить достижение"
        submitBtnName="Изменить достижение"
        onClickBtnClose={onClickBtnClose}
        onSubmitHandlerEditAchievement={onSubmitHandlerEditAchievement}
        onClose={onClickBtnClose}
        errorResponse={errorResponse}
      // editDocument={editDocument}
      />
    </section>
  )
}

export default Achievements
