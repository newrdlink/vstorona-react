import React from 'react'
import './SingleLink.css'

const SingleLink = ({ url, place, name }) => <a
  rel="noreferrer"
  target="_blank"
  href={url}
  className={`single-link single-link_place_${place}`}>
  {name}
</a>

export default SingleLink
