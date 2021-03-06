import React, { useEffect, useState } from 'react'
import './PageTitleShadow.css'

const PageTitleShadow = ({ pageInfo, place, startPosition = -44, title }) => {

  const [positionScroll, setPositionScroll] = useState(startPosition)

  useEffect(() => {
    function handleScroll(event) {
      // console.log(this.closest('events'))
      let scroll = this.scrollY + startPosition;
      setPositionScroll(scroll)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  });
  // if pageYOffset is not 0 (page up max)

  const handleScrollFix = () => {
    // console.log(1)
    let position = window.pageYOffset;
    if (position > 0) {
      setPositionScroll(position - (!startPosition));
    }
  };

  useEffect(() => {
    if (place !== "main") {
      handleScrollFix()
    }
  }, [])

  // <p>&#8226;</p>
  return (
    <>
      {
        place === "news-main" || place === "dance-main" ?
          <h3 className={`title-shadow title-shadow_place_${place || ""}`}
            style={{ right: `${positionScroll}px` }}
          >
            {pageInfo?.name || title}
          </h3>
          :
          <h3 className={`title-shadow title-shadow_place_${place || ""}`}
            style={{ left: `${positionScroll}px` }}
          >
            {pageInfo?.name || title}
          </h3>
      }
    </>
  )
}

export default PageTitleShadow
