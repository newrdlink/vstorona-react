import React, { useState, useEffect } from 'react'
import './EditAchievement.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'
import ErrorByResponse from '../../ErrorByResponse/ErrorByResponse'
import Input from '../../inputs/Input/Input'

import inputs from '../../../../config/inputsAddAchievements'


const EditAchievement = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerEditAchievement,
  errorResponse,
}) => {

  const [achievement, setAchievement] = useState({})

  const onChangeText = (evt) => {
    setAchievement({ ...achievement, [evt.target.name]: evt.target.value })
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    onSubmitHandlerEditAchievement(achievement)
  }

  useEffect(() => {
    setAchievement(isOpen[0])
  }, [isOpen])

  const isUndefined = achievement === undefined ? "" : 1

  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="edit-achievement"

    >

      {inputs.map((input) => {
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
          value={isUndefined && achievement[name]}
        />
      })}

      <ErrorByResponse
        errorResponse={errorResponse}
      />

    </PopupWithForm>
  )
}

export default EditAchievement
