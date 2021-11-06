import React from 'react'
import './SocialLinksShare.css'

const SocialLinksShare = () => {

  const loadScript = () => {
    const script = document.createElement("script")
    script.src = "https://yastatic.net/share2/share.js"
    script.async = true
    document.body.appendChild(script)
  }
  loadScript()

  return (
    <div className="share-social-links">
      <span className="share-social-links__span">поделиться:</span>
      <div className="ya-share2"
        data-curtain
        data-size="m"
        // data-shape="round"
        data-services="vkontakte,facebook,odnoklassniki,telegram,whatsapp">
      </div>
    </div>
  )
}

export default SocialLinksShare
