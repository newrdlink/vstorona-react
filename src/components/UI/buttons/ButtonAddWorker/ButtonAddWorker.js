import React from 'react'
import './ButtonAddWorker.css'

const ButtonAddWorker = ({ id, onClickAddWorker }) =>
  <button type="button" className="button-add-worker"
    onClick={onClickAddWorker}>
  </button>

export default ButtonAddWorker
