import React from 'react'
import { Link } from 'react-router-dom'
import './CollectiveItem.css'

const CollectiveItem = (props) => {
  // console.log(props)
  const { name } = props
  // console.log(props)
  return (

    <Link to="#" className="collective-item__link">
      {name}
    </Link>


  )
}

export default CollectiveItem
