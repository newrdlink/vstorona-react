import React from 'react'
import './PolicyBlock.css'

import PolicyItem from '../PolicyItem/PolicyItem'

const PolicyBlock = ({ item }) => {

  const { list = [] } = item
  // console.log(Array.isArray(list))
  // console.log(list)

  return (
    <>
      <h6 className="accessible-block__title">{item.title}</h6>
      <ul className="policy-block">
        {
          list.map((el) => {
            // console.log(el.hasOwnProperty("title"))
            if (!el.hasOwnProperty("title")) {

              return <PolicyItem key={el || el[0]} item={el} />
            }
            return <PolicyBlock item={el} key={el.title} />
          })
        }
      </ul>
    </>

  )
}

export default PolicyBlock
