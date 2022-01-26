import React from 'react'
import './DocBoxTitle.css'

const DocBoxTitle = ({ title, place, onClick }) =>
  <h5
    className={`doc-box-title doc-box-title_place_${place}`}
    onClick={onClick}
  >
    {title}
  </h5>

export default DocBoxTitle
