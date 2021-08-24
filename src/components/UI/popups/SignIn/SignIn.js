import React, { useState, useEffect } from 'react'
import './SignIn.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import inputsSignIn from '../../../../config/inputsSignIn'
import Input from '../../inputs/Input/Input'
import LinkSignInSignUp from '../../buttons/LinkSignInSignUp/LinkSignInSignUp'
import ErrorByResponse from '../../ErrorByResponse/ErrorByResponse'

const SignIn = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerSignIn,
  onClickBtnSignUp,
  errorResponse
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
      <ErrorByResponse
        errorResponse={errorResponse}
      />
    </PopupWithForm>
  )
}

export default SignIn
