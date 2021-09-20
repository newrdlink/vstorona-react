import React, { useEffect, useState } from 'react'
import './PageTitleShadow.css'

const PageTitleShadow = ({ pageInfo, place }) => {

  const [positionScroll, setPositionScroll] = useState(-44)

  useEffect(() => {
    function handleScroll(event) {
      // console.log(this.closest('events'))
      let scroll = this.scrollY - 44;
      setPositionScroll(scroll)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  });
  // if pageYOffset is not 0 (page up max)
  const handleScrollFix = () => {
    let position = window.pageYOffset;
    if (position > 0) {
      setPositionScroll(position - 44);
    }
  };

  useEffect(() => {
    handleScrollFix()
  }, [])

  return (

    <h3 className={`title-shadow title-shadow_place_${place || ""}`}
      style={{ left: `${positionScroll}px` }}>
      {pageInfo.name}
    </h3>


  )
}

export default PageTitleShadow
