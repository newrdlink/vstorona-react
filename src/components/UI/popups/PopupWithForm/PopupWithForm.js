import { React } from 'react'
import './PopupWithForm.css'
import CloseIcon from '../CloseIcon/CloseIcon'
// import resetInputs from '../../../../helpers/clearInputs'

const PopupWithForm = ({
  children,
  onClose,
  isOpen,
  title,
  onSubmit,
  submitBtnName,
  onClickBtnClose,
  name,
}) => {

  // useEffect(() => {
  //   setTimeout(() => resetInputs(name), 1000)
  // }, [isOpen, name])

  return (
    <section className={`popup ${isOpen && "popup_opened"}`}
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}>
      <div className="popup__container">
        <CloseIcon
          onClick={onClickBtnClose} />
        <h3 className={`popup__title popup__title_type_${name}`}>
          {title}
        </h3>
        <form className={`popup__form popup__form_type_${name}`}
          noValidate
          onSubmit={onSubmit}
          name={name}>

          {children}

          <button
            type='submit'

            className={`popup__submit popup__submit_place_${name}`}>
            {submitBtnName}
          </button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm
