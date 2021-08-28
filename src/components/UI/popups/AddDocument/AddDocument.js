import React, { useState, useEffect } from 'react'
import './AddDocument.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'

import inputsAddDocument from '../../../../config/inputsAddDocument'
import Input from '../../inputs/Input/Input'
import ErrorByResponse from '../../ErrorByResponse/ErrorByResponse'
// import InputFile from '../../inputs/InputFile/InputFile'

const AddDocument = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerAddDocument,
  errorResponse
}) => {

  const [document, setDocument] = useState({})

  const onSubmit = async (evt) => {
    evt.preventDefault()
    onSubmitHandlerAddDocument(document)
  }

  const onChangeText = (evt) => {
    setDocument({ ...document, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    // for if open Add popup input type will be filled
    const arrKeys = Object.keys(isOpen)
    const obj = arrKeys.reduce((obj, item) => {
      item === "type" ? obj[item] = isOpen[item] : obj[item] = ""
      return obj
    }, {})
    setDocument(obj)
  }, [isOpen])

  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="add-document"
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
          value={name === "type" ? document.type : document[name]}
        />
      })}
      <ErrorByResponse
        errorResponse={errorResponse}
      />
    </PopupWithForm>
  )
}

export default AddDocument
