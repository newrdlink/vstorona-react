import React from 'react'
import './DocBoxTitle.css'

const DocBoxTitle = ({ title, place }) =>
  <h5 className={`doc-box-title doc-box-title_place_${place}`}>{title}</h5>

export default DocBoxTitle
