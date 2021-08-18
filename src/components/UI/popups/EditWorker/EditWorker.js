import React, { useState, useRef, useEffect } from 'react'
import './EditWorker.css'

import PopupWithForm from '../PopupWithForm/PopupWithForm'

import isAreFileInInput from '../../../../helpers/isAreFileInInput'

const EditWorker = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  worker,
  onClose,
  onSubmitHandlerEditWorker,
  errorMessage }) => {

  // console.log(worker)
  const imageFile = useRef({})
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

  const handleChangeFile = () => {
    const file = imageFile.current.files[0]
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
      <label>
        <input
          className="input"
          value={userData.firstName || ''}
          name="firstName"
          type="text"
          required
          minLength="2"
          maxLength="20"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          className="input"
          value={userData.lastName || ''}
          name="lastName"
          type="text"
          required
          autoComplete="off"
          minLength="2"
          maxLength="20"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          className="input"
          value={userData.middleName || ''}
          name="middleName"
          type="text"
          required
          autoComplete="off"
          minLength="2"
          maxLength="20"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          className="input"
          value={userData.position || ''}
          name="position"
          type="text"
          required
          autoComplete="off"
          minLength="2"
          maxLength="50"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          className="input input_type_file"
          name="imageFile"
          type="file"
          required
          autoComplete="off"
          ref={imageFile}
          onChange={handleChangeFile}
        />
        <span className={`input__span input__span_${isAreFileInInput(file) && "active"}`}>{isAreFileInInput(file) || "Выбрать фото"}</span>
      </label>
    </PopupWithForm>
  )
}

export default EditWorker
