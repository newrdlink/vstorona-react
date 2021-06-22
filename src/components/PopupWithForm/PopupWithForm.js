import React from 'react'
import './PopupWithForm.css'
import CloseIcon from '../CloseIcon/CloseIcon'

const PopupWithForm = ({ children, onClose, isOpen, title, onSubmit, submitBtnName, onClickBtnClose }) => {

  return (
    <section className={`popup ${isOpen && "popup_opened"}`}
      onSubmit={onSubmit} noValidate
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}>
      <div className="popup__container">
        <CloseIcon
          onClick={onClickBtnClose} />
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form">
          {children}
          <button type='submit' className="popup__submit">{submitBtnName}</button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm
