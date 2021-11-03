import React from 'react'
import { Link } from 'react-router-dom'
import './DocItemCorr.css'

const DocItemCorr = ({ item }) => {
  //console.log(item)
  const { link, title } = item

  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">{title}</a>
    </li>
  )
}

export default DocItemCorr
