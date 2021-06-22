import React from 'react'
import './AddWorker.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import inputs from '../../config/inputsAddWorker'
import Input from '../Input/Input'

const AddWorker = ({ title, submitBtnName, onClickBtnClose, isOpen, onClose }) => {
  return (
    <PopupWithForm
      title={title}
      submitBtnName={submitBtnName}
      onClickBtnClose={onClickBtnClose}
      isOpen={isOpen}
      onClose={onClose}>
      {inputs.map((input) => {
        const { name, type, required, autocomplete, label, placeholder, minlengths, maxlength } = input
        return <Input
          name={name}
          type={type}
          required={required}
          autocomplete={autocomplete}
          label={label}
          placeholder={placeholder}
          minlengths={minlengths}
          maxlength={maxlength}
        />
      })}
    </PopupWithForm>
  )
}

export default AddWorker
