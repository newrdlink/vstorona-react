import React from 'react'
import './PageTitle.css'

const PageTitle = (props) => {
  const { pageInfo = {} } = props
  // console.log(pageInfo)

  // const isHallPage = pageInfo["pathName"].endsWith('showroom')
  // console.log(isHallPage)

  return <h1 className={`title title_place_${pageInfo.pathName}`}>
    {pageInfo.name}
  </h1>
}

export default PageTitle
