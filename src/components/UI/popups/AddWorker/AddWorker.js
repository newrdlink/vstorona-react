import { React, useState, useRef } from 'react'
import './AddWorker.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
// import inputs from '../../config/inputsAddWorker'
// import Input from '../Input/Input'

const AddWorker = ({ title, submitBtnName, onClickBtnClose, isOpen, onClose, onSubmitHandlerAddWorker, errorMessage }) => {

  const [file, setFile] = useState(null)
  const imageFile = useRef(null)
  const [userData, setUserData] = useState({});

  const onSubmit = async (evt) => {
    evt.preventDefault();
    let data = new FormData();
    data.append('imageFile', file)
    // adding user info from form inputs
    data.append('workerInfo', JSON.stringify(userData))
    onSubmitHandlerAddWorker(data)
  }

  const handleChangeFile = () => {
    const file = imageFile.current.files[0]
    setFile(file)
  }

  const onChangeText = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
  }

  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      name="addWorker">
      <label>
        <input
          name="firstName"
          type="text"
          required
          autoComplete="off"
          placeholder="Кирилл"
          minLength="2"
          maxLength="20"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          name="lastName"
          type="text"
          required
          autoComplete="off"
          placeholder="Мухин"
          minLength="2"
          maxLength="20"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          name="middleName"
          type="text"
          required
          autoComplete="off"
          placeholder="Витальевич"
          minLength="2"
          maxLength="20"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          name="position"
          type="text"
          required
          autoComplete="off"
          placeholder="Должность"
          minLength="2"
          maxLength="50"
          onChange={(evt) => onChangeText(evt)}
        />
      </label>
      <label>
        <input
          name="imageFile"
          type="file"
          required
          autoComplete="off"
          ref={imageFile}
          onChange={handleChangeFile}
        />
      </label>
      <p>{errorMessage}</p>
      {/* {inputs.map((input) => {
        const { name, type, required, autocomplete, label, placeholder, maxlength, minlength, id } = input
        return <Input
          imageFile={type === "file" ? imageFile : null}
          key={id}
          name={name}
          type={type}
          required={required}
          autocomplete={autocomplete}
          label={label}
          placeholder={placeholder}
          minlength={minlength}
          maxlength={maxlength}
          onChange={type === "file" ? handleChangeFile : (evt) => onChangeText(evt)}
        />
      })} */}
    </PopupWithForm>
  )
}

export default AddWorker
