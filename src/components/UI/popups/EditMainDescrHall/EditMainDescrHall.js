import React, { useState, useEffect } from 'react'
import './EditMainDescrHall.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'
import Input from '../../inputs/Input/Input'

import inputs from '../../../../config/inputsEditMainDescrHall'

const EditMainDescrHall = ({
  title,
  submitBtnName,
  isOpen,
  onClose,
  onSubmitEditMainDescrHall,
  currentHall
}) => {
  // console.log(currentHall)
  const [description, setDescription] = useState({})

  const onSubmit = async (evt) => {
    evt.preventDefault()
    onSubmitEditMainDescrHall(description)
  }

  const onChangeText = (evt) => {
    setDescription({ ...description, [evt.target.name]: evt.target.value })
    // setDescription(evt.target.value)
  }

  useEffect(() => {
    let obj = {}
    obj.price = currentHall.price
    obj.linkToPrice = currentHall.linkToPrice
    setDescription(obj)
  }, [currentHall])

  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="edit-main-description-hall"
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
          value={description[name]}
        />
      })}
      {/* <Input
        name="desctiption"
        label="Измените описание"
        onChange={(evt) => onChangeText(evt)}
        value={'ghfreio'}
      /> */}
    </PopupWithForm>
  )
}

export default EditMainDescrHall
