import React, { useState, useEffect } from 'react'
import './EditWorker.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'
import inputs from '../../../../config/inputsAddWorker'
import Input from '../../inputs/Input/Input'
import InputFile from '../../inputs/InputFile/InputFile'

const EditWorker = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  worker,
  onClose,
  onSubmitHandlerEditWorker,
  errorMessage }) => {

  const [file, setFile] = useState(null)
  const [userData, setUserData] = useState({});

  const onSubmit = async (evt) => {
    evt.preventDefault()
    let data = new FormData();
    data.append('imageFile', file)
    // adding user info from form inputs
    data.append('workerInfo', JSON.stringify(userData))
    onSubmitHandlerEditWorker(data)
  }

  const onChangeText = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
  }

  const handleChangeFile = (file) => {
    setFile(file)
  }

  useEffect(() => {
    setUserData(worker)
  }, [worker])

  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="editWorker"
    >
      <p>{errorMessage}</p>
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
        return type === "file" ?
          <InputFile
            key={id}
            file={file}
            name="imageFileWorker"
            setFileChange={handleChangeFile}
          /> :
          <Input
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
      })}
    </PopupWithForm>
  )
}

export default EditWorker
