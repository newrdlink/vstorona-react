import React from 'react'
import './Footer.css'

import Logo from '../Logo/Logo'
import CopyRight from './CopyRight/CopyRight'
import PolicyConfidentiality from './PolicyConfidentiality/PolicyConfidentiality'
import NumPhone from '../UI/NumPhone/NumPhone'
import SingleLink from '../UI/SingleLink/SingleLink'

const Footer = () => {
  return (
    <footer className="footer">
      <Logo place="footer" />
      <CopyRight />
      <PolicyConfidentiality />
      <NumPhone
        place="footer" />
      <SingleLink
        name="Instagram"
        url="https://www.instagram.com/?hl=ru"
        place="footer" />
    </footer>
  )
}

export default Footer
