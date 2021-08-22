import React, { useState } from 'react'
import './SignIn.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import inputsSignIn from '../../../../config/inputsSignIn'
import Input from '../../inputs/Input/Input'
import LinkSignInSignUp from '../../buttons/LinkSignInSignUp/LinkSignInSignUp'

const SignIn = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerSignIn,
  onClickBtnSignUp,
  errorMessage
}) => {

  const [userData, setUserData] = useState({});

  const onChangeText = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    onSubmitHandlerSignIn(userData)
  }

  return (
    <PopupWithForm
      name="signin"
      isOpen={isOpen}
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      {
        inputsSignIn.map((input) => {
          const {
            name,
            type,
            required,
            autocomplete,
            label,
            placeholder,
            maxlength,
            minlength,
            id } = input
          return <Input
            key={id}
            name={name}
            type={type}
            required={required}
            autocomplete={autocomplete}
            label={label}
            placeholder={placeholder}
            minlength={minlength}
            maxlength={maxlength}
            onChange={(evt) => onChangeText(evt)}
            value={userData[name]}
          />
        })
      }
      <LinkSignInSignUp
        nameBtn="Зарегистрироваться"
        nameSpan="Еще не с нами?"
        onClickBtnSignUp={onClickBtnSignUp}
      />

      {/* <input
        className="form__input form__input_email"
        type="email"
        placeholder="Email"
        onChange={evt => {
          setUserData({ ...userData, "email": evt.target.value })
        }}
      />
      <input
        className="form__input form__input_password"
        type="password"
        placeholder="Пароль"
        onChange={evt => {
          setUserData({ ...userData, "password": evt.target.value })
        }}
      /> */}
    </PopupWithForm>
  )
}

export default SignIn
