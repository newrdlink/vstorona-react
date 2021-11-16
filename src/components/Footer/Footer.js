import React from 'react'
import './Footer.css'

import Logo from '../Logo/Logo'
import CopyRight from './CopyRight/CopyRight'
import PolicyConfidentiality from './PolicyConfidentiality/PolicyConfidentiality'
import NumPhone from '../UI/NumPhone/NumPhone'
import SingleLink from '../UI/SingleLink/SingleLink'

const Footer = () => {

  const isMobile = window.innerWidth < 780

  return (
    <footer className="footer">
      <div className="footer-container">
        <Logo place="footer" />
        {
          isMobile ?
            <>
              <NumPhone place="footer" />
            </>
            : null
        }
        {
          isMobile ? null :
            <>
              <CopyRight />
              <PolicyConfidentiality />
              <NumPhone
                place="footer" />
            </>
        }
        {
          isMobile ? null : <SingleLink
            name="Instagram"
            url="https://www.instagram.com/?hl=ru"
            place="footer" />
        }
      </div>
      {
        isMobile ? <div className="footer__content">
          <PolicyConfidentiality />
          <CopyRight />
        </div> : null
      }

    </footer>
  )
}

export default Footer
