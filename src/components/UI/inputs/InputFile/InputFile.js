import React from 'react'
import './InputFile.css'

import isAreFileInInput from '../../../../helpers/isAreFileInInput'

const InputFile = ({ name, file, setFileChange }) => {

  const handleChangeFile = (evt) => {
    const file = evt.target.files[0]
    setFileChange(file)
  }

  const deleteFileInput = () => {
    setFileChange(null)
  }

  return (
    <label className="input-label">
      <input
        className="input input_type_file"
        name={name}
        type="file"
        required
        autoComplete="off"
        onChange={handleChangeFile}
        accept="image/*"
      />
      <span
        className={`input__file input__file_${isAreFileInInput(file) && "active"}`}
        onClick={deleteFileInput}
      >
        {isAreFileInInput(file) || "Выбрать фото"}
      </span>
    </label>
  )
}

export default InputFile
