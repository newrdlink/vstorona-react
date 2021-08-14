import React from 'react'
import './SingleLink.css'

const SingleLink = ({ url, place, name }) => <a
  rel="noreferrer"
  target="_blank"
  href={url}
  place={place}
  className="single-link">
  {name}
</a>

export default SingleLink
