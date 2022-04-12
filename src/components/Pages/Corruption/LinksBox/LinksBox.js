import React from 'react'
import './LinksBox.css'
import MyLink from '../MyLink/MyLink'

const LinksBox = ({ links = [], path }) => {

  return (
    <ul className='links-box'>
      {
        links.map((el) => <MyLink key={el.path} path={path + el.path} name={el.type} />)
      }
    </ul>
  )
}

export default LinksBox
