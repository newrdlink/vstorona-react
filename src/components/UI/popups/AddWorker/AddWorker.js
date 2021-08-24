import { React, useState, useEffect } from 'react'
import './AddWorker.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import inputsAddWorker from '../../../../config/inputsAddWorker'
import Input from '../../inputs/Input/Input'
import InputFile from '../../inputs/InputFile/InputFile'

const AddWorker = ({
  title,
  submitBtnName,
  onClickBtnClose,
  isOpen,
  onClose,
  onSubmitHandlerAddWorker,
  errorMessage
}) => {

  const [file, setFile] = useState(null)

  const [userData, setUserData] = useState({});

  const onSubmit = async (evt) => {
    evt.preventDefault();
    let data = new FormData();
    data.append('imageFile', file)
    // adding user info from form inputs
    data.append('workerInfo', JSON.stringify(userData))
    onSubmitHandlerAddWorker(data)
  }

  const handleChangeFile = (file) => {
    setFile(file)
  }

  const onChangeText = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    setUserData({})
    setFile(null)
  }, [onClose])

  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="addWorker">
      <p>{errorMessage}</p>
      {inputsAddWorker.map((input) => {
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

export default AddWorker
