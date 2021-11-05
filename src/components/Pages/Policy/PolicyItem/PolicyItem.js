import React from 'react'
import './PolicyItem.css'

const PolicyItem = ({ item }) => {
  // console.log(item)
  return (
    <li className="policy-item">{item}</li>
  )
}

export default PolicyItem