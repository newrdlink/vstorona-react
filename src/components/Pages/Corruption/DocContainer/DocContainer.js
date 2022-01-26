import React, { useState } from 'react'
import './DocContainer.css'

import DocItemCorr from '../DocItemCorr/DocItemCorr'
import DocBoxTitle from '../../About/Documents/DocBoxTitle/DocBoxTitle'

const DocContainer = ({ items = [], loggedIn, removeDoc }) => {
  // console.log(items)
  const [isActive, setIsActive] = useState(false)

  return (
    <section className={`doc-items-container ${isActive && "doc-items-container_active"}`}>
      <DocBoxTitle
        title={items.length === 0 ? "" : items[0].type}
        place="anti-corr-docs"
        onClick={() => setIsActive(!isActive)}
      // onClick={() => console.log(1)}
      />
      <ul className={`doc-items ${isActive && "doc-items_active"}`}>
        {
          items.map(item => <DocItemCorr key={item._id} item={item} loggedIn={loggedIn} removeDoc={removeDoc} />)
        }
      </ul>
    </section>
  )
}

export default DocContainer