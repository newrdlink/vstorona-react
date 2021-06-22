import React from 'react'

const Input = ({ name, type, required, autocomplete, label, placeholder, minlengths, maxlength }) => {

  return (
    <label>
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autocomplete={autocomplete}
        placeholder={placeholder}
        minLengths={minlengths}
        maxLength={maxlength}
      />
    </label>
  )
}

export default Input
