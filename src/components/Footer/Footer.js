import React from 'react'
import './Footer.css'

import Logo from '../Logo/Logo'
import CopyRight from './CopyRight/CopyRight'
import PolicyConfidentiality from './PolicyConfidentiality/PolicyConfidentiality'
import NumPhone from '../UI/NumPhone/NumPhone'
import SingleLink from '../UI/SingleLink/SingleLink'
import { socialLinks } from '../../constants/socialLinks'

const Footer = () => {

  const isIpad = window.screen.availWidth <= 768
  // const isMobile = window.screen.availWidth <= 350

  return (
    <footer className="footer">
      <div className="footer-container">
        <Logo place="footer" />
        {
          isIpad ?
            <>
              <NumPhone place="footer" />
            </>
            : null
        }
        {
          isIpad ? null :
            <>
              <CopyRight />
              <PolicyConfidentiality />
              <NumPhone
                place="footer" />
            </>
        }
        {
          isIpad ? null : <SingleLink
            name="Instagram"
            url={socialLinks.instagram}
            place="footer" />
        }
      </div>
      {
        isIpad ? <div className="footer__content">
          <PolicyConfidentiality />
          <CopyRight />
        </div> : null
      }

    </footer>
  )
}

export default Footer
