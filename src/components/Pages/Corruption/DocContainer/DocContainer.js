import React from 'react'
import './DocContainer.css'

import DocItemCorr from '../DocItemCorr/DocItemCorr'
import DocBoxTitle from '../../About/Documents/DocBoxTitle/DocBoxTitle'

const DocContainer = ({ items = [], loggedIn, removeDoc }) => {
  // console.log(items)

  return (
    <>
      <DocBoxTitle
        title={items.length === 0 ? "" : items[0].type}
        place="anti-corr-docs"
      />
      <ul className="doc-items">
        {
          items.map(item => <DocItemCorr key={item._id} item={item} loggedIn={loggedIn} removeDoc={removeDoc} />)
        }
      </ul>
    </>
  )
}

export default DocContainer