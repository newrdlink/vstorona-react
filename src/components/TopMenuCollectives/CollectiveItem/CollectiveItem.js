import React from 'react'
import { Link } from 'react-router-dom'
import './CollectiveItem.css'
import { setCollective } from '../../../utils/currentCollective'

const CollectiveItem = (props) => {
  // console.log(props)
  const { name, _id, onClickLink, arrSubtype } = props
  // console.log(props)

  const currentCollective = arrSubtype.find((el) => el._id === _id)


  const onClickLinkHandle = () => {
    // console.log(currentCollective)
    setCollective(currentCollective)
    onClickLink()
  }
  return (
    <Link to={`/collectives/${_id}`} className="collective-item__link" onClick={onClickLinkHandle}>
      {name}
    </Link>


  )
}

export default CollectiveItem
