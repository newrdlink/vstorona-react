import React from 'react'
import './Input.css'

const Input = ({
  name,
  type,
  required,
  autocomplete,
  label,
  placeholder,
  maxlength,
  minlength,
  onChange,
  file
}) => {

  return (
    <label className="input-label">
      {label}
      <input
        className="input"
        ref={file}
        name={name}
        type={type}
        required={required}
        autoComplete={autocomplete}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        onChange={onChange}
      />
    </label>
  )
}

export default Input
