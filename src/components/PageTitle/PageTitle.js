import React from 'react'
import './PageTitle.css'

const PageTitle = (props) => {
  const { pageInfo = {} } = props
  // console.log(obj)
  return <h3 className={`title title_place_${pageInfo.pathName} `}>
    {pageInfo.name}
  </h3>
}

export default PageTitle
