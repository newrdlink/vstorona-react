import React, { useEffect } from 'react'

import './SocialLinksShare.css'

const SocialLinksShare = ({ currentNews, place }) => {

  useEffect(() => {

    const isLoaded = Array.from(document.body.querySelectorAll('script')).some((el) => el.outerHTML.includes('share.js'))

    if (!isLoaded) {
      const loadScript = () => {
        const script = document.createElement("script")
        script.src = "https://yastatic.net/share2/share.js"
        script.async = true
        document.body.appendChild(script)
      }
      loadScript()
    }

    const rmScript = () => {
      const script = document.body.getElementsByTagName('script')
      script[0].remove()
      // console.log('didMounted')
    }

    return () => rmScript()
  }, [currentNews])

  // console.log(currentNews)
  return (
    <div className={`share-social-links share-social-links_place_${place}`}>
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
