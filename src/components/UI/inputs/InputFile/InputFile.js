import React from 'react'
import './InputFile.css'

import isAreFileInInput from '../../../../helpers/isAreFileInInput'

const InputFile = ({ name, file, setFileChange }) => {

  const handleChangeFile = (evt) => {
    const file = evt.target.files[0]
    // console.log(evt.target.files[0])
    setFileChange(file)
  }

  const deleteFileInput = () => {
    setFileChange(null)
  }

  // console.log(file)

  return (
    <label className="input-label">
      <input
        className="input input_type_file"
        name={name}
        type="file"
        required
        autoComplete="off"
        // ref={file}
        onChange={handleChangeFile}
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
