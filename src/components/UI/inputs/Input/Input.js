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
  file,
  value
}) => {

  return (
    <label className={`input-label input-label_type_${type}`}>
      {label}
      <input
        className={`input input_type_${type}`}
        ref={file}
        name={name}
        type={type}
        required={required}
        autoComplete={autocomplete}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        onChange={onChange}
        value={value || ''}
      />
    </label>
  )
}

export default Input
