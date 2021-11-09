import React, { useState } from 'react'
import './AddItemDescrHall.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'
import Input from '../../inputs/Input/Input'

const AddItemDescrHall = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitAddDescrHall }) => {

  const [descriptionItem, setDescriptionItem] = useState('')

  const onSubmit = async (evt) => {
    evt.preventDefault()
    console.log(2)
    onSubmitAddDescrHall(descriptionItem)
  }

  const onChangeText = (evt) => {
    // setDescriptionItem({ ...descriptionItem, [evt.target.name]: evt.target.value })
    setDescriptionItem(evt.target.value)
  }
  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="add-description-hall"
    >
      <Input
        name="description"
        label="Введите описание"
        onChange={(evt) => onChangeText(evt)}
        value={descriptionItem}
      />
    </PopupWithForm>
  )
}

export default AddItemDescrHall
