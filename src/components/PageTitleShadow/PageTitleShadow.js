import React, { useEffect, useState } from 'react'
import './PageTitleShadow.css'

const PageTitleShadow = ({ pageInfo }) => {

  const [positionScroll, setPositionScroll] = useState(0)

  useEffect(() => {
    function handleScroll(event) {
      let scroll = this.scrollY;
      setPositionScroll(scroll)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  });

  return (
    <h3 className="title-shadow"
      style={{ left: `${positionScroll}px` }}>
      {pageInfo.name}
    </h3>
  )
}

export default PageTitleShadow
