import React from 'react'

const Input = ({ name,
  type, required, autocomplete, label, placeholder, maxlength, minlength, onChange, imageFile }) => {

  return (
    <label>
      {label}
      <input
        ref={imageFile}
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
