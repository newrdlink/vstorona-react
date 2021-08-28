import React, { useState, useEffect } from 'react'
import './EditDocument.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'
import inputsAddDocument from '../../../../config/inputsAddDocument'
import Input from '../../inputs/Input/Input'
import ErrorByResponse from '../../ErrorByResponse/ErrorByResponse'

const EditDocument = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerEditDocument,
  errorResponse,
  editDocument,
}
) => {

  const [document, setDocument] = useState({})

  const onSubmit = async (evt) => {
    evt.preventDefault()
    onSubmitHandlerEditDocument(document)
  }

  const onChangeText = (evt) => {
    setDocument({ ...document, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    setDocument(editDocument[0])
  }, [editDocument])

  const isUndefined = document === undefined ? "" : 1

  return (
    <PopupWithForm
      onSubmit={onSubmit}
      name="editDocument"
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
    >

      {inputsAddDocument.map((input) => {
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
          value={isUndefined && document[name]}
        />
      })}
      <ErrorByResponse
        errorResponse={errorResponse}
      />

    </PopupWithForm>
  )
}

export default EditDocument
