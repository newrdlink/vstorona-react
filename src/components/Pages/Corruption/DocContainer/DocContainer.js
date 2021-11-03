import React from 'react'
import './DocContainer.css'

import DocItemCorr from '../DocItemCorr/DocItemCorr'

const DocContainer = ({ items = [] }) => {
  // console.log(items)

  return (
    <>
      <h4>{items[0]?.type}</h4>
      <ul>
        {
          items.map(item => <DocItemCorr key={item.id} item={item} />)
        }
      </ul>
    </>
  )
}

export default DocContainer