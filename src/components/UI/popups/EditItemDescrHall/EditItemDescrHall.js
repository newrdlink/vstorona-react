import React, { useState, useEffect } from 'react'
import './EditItemDescrHall.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'
import Input from '../../inputs/Input/Input'

const EditItemDescrHall = ({
  title,
  submitBtnName,
  isOpen,
  onClose,
  onSubmitEditDescrHall
}) => {

  const [descriptionItem, setDescriptionItem] = useState('')

  const onSubmit = async (evt) => {
    evt.preventDefault()
    onSubmitEditDescrHall(descriptionItem)
  }

  const onChangeText = (evt) => {
    // setDescriptionItem({ ...descriptionItem, [evt.target.name]: evt.target.value })
    setDescriptionItem(evt.target.value)
  }

  useEffect(() => {
    setDescriptionItem(isOpen)
  }, [isOpen])
  //console.log(isOpen)
  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="edit-description-hall"
    >
      <Input
        name="desctiption"
        label="Измените описание"
        onChange={(evt) => onChangeText(evt)}
        value={descriptionItem}
      />
    </PopupWithForm>
  )
}

export default EditItemDescrHall