import React from 'react'
import './SupervisorPhone.css'

const SupervisorPhone = ({ phone }) => {

  return (
    <div className="supervisor-phone">
      <h6 className="supervisor-phone__title">Телефон</h6>
      <p className="supervisor-phone-number">{phone}</p>
    </div>
  )
}

export default SupervisorPhone