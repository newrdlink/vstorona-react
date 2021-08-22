import React, { useEffect, useState } from 'react'
import './SignUp.css'
import inputsSignUp from '../../../../config/inputsSignUp'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import Input from '../../inputs/Input/Input'
import LinkSignInSignUp from '../../buttons/LinkSignInSignUp/LinkSignInSignUp'

const SignUp = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerSignUp,
  onClickBtnSignIn,
  name,
  errorMessage,
  isSignUpOk
}) => {

  const [userData, setUserData] = useState({});

  const onChangeText = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    onSubmitHandlerSignUp(userData)
    // if (isSignUpOk) { evt.target.reset() }
  }

  useEffect(() => {
    setUserData({})
  }, [isSignUpOk])

  return (
    <PopupWithForm
      name="signup"
      isOpen={isOpen}
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      {
        inputsSignUp.map((input) => {
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
        nameBtn="Войти"
        nameSpan="Зарегистрированы?"
        onClickBtnSignUp={onClickBtnSignIn}
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

export default SignUp
