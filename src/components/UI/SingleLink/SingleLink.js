import React from 'react'
import './SingleLink.css'

const SingleLink = ({ url, place, name, onClick = null }) => <a
  onClick={onClick}
  rel="noreferrer"
  target="_blank"
  href={url}
  className={`single-link single-link_place_${place}`}>
  {name}
</a>

export default SingleLink
