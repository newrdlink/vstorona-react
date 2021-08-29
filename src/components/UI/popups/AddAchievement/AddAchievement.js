import React, { useState, useEffect } from 'react'
import './AddAchievement.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'
import inputs from '../../../../config/inputsAddAchievements'

import Input from '../../inputs/Input/Input'
import ErrorByResponse from '../../ErrorByResponse/ErrorByResponse'

const AddAchievement = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerAddAchievement,
  errorResponse
}) => {

  const [achievement, setAchievement] = useState({})

  const onSubmit = async (evt) => {
    evt.preventDefault()
    onSubmitHandlerAddAchievement(achievement)
  }

  const onChangeText = (evt) => {
    setAchievement({ ...achievement, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    const arrKeys = Object.keys(isOpen)
    const obj = arrKeys.reduce((obj, item) => {
      item === "type" ? obj[item] = isOpen[item] : obj[item] = ""
      return obj
    }, {})
    setAchievement(obj)
  }, [isOpen])

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClose}
      onSubmit={onSubmit}
      name="add-achievement"
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
          value={name === "type" ? achievement.type : achievement[name]}
        />
      })}
      <ErrorByResponse
        errorResponse={errorResponse}
      />

    </PopupWithForm>
  )
}

export default AddAchievement
