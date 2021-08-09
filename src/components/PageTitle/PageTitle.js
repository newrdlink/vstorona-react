import React from 'react'
import './PageTitle.css'

const PageTitle = (props) => {
  const { pageInfo } = props
  // console.log(obj)
  return <h3 className="title">{pageInfo.name}</h3>
}

export default PageTitle
