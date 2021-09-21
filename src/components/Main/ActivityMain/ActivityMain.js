import React, { useRef, useEffect } from 'react'
import './ActivityMain.css'

import MainTitle from '../MainTitle/MainTitle'
import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'

import CardsBox from '../../CardsBox/CardsBox'
import { activityMainItems } from '../../../config/activityMainItems'

const ActivityMain = ({ currentPath }) => {

  const scrollContainer = useRef()
  // for drag i nprogress
  // const [stateActivityMain, setStateActivityMain] = useState({
  //   isScrolling: false,
  //   clientX: 0,
  //   scrollX: 0,
  // })

  useEffect(() => {
    const element = scrollContainer.current

    if (element) {
      const onWheel = (evt) => {
        evt.preventDefault()
        element.scroll({
          left: element.scrollLeft + evt.deltaY * 10,
          behavior: "smooth"
        })
      }
      element.addEventListener('wheel', onWheel)
      return () => element.removeEventListener('wheel', onWheel)
    }
  }, [])

  //////// drag in progress

  // const isDragContainer = (evt) => scrollContainer && scrollContainer.current && !scrollContainer.current.contains(evt.target)

  // const onMouseMove = (evt) => {

  //   if (isDragContainer(evt)) {
  //     console.log('move')
  //     return
  //   }
  //   evt.preventDefault()
  //   const { clientX, scrollX, isScrolling } = stateActivityMain

  //   if (isScrolling) {
  //     scrollContainer.current.scrollLeft = scrollX + evt.clientX - clientX
  //   }

  //   setStateActivityMain({
  //     ...stateActivityMain,
  //     scrollX: scrollX + evt.clientX - clientX,
  //     clientX: evt.clientX
  //   })
  // }

  // const onMouseDown = (evt) => {
  //   if (isDragContainer(evt)) {
  //     console.log('cleck')
  //     return
  //   }
  //   evt.preventDefault()

  //   setStateActivityMain({
  //     ...stateActivityMain,
  //     isScrolling: true,
  //     clientX: evt.clientX
  //   })
  // }
  // const onMouseUp = (evt) => {
  //   if (isDragContainer(evt)) {
  //     console.log('up')
  //     return
  //   }
  //   evt.preventDefault()
  //   setStateActivityMain({
  //     ...stateActivityMain,
  //     isScrolling: false,
  //   })
  // }

  // useEffect(() => {
  //   document.addEventListener('mousedown', onMouseDown)
  //   document.addEventListener('mouseup', onMouseUp)
  //   document.addEventListener('mousemove', onMouseMove)
  //   return () => {
  //     document.removeEventListener('mousedown', onMouseDown)
  //     document.removeEventListener('mouseup', onMouseUp)
  //     document.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [])

  return (
    <section className="activity-main">
      <PageTitleShadow
        pageInfo={{ name: "наша деятельность" }}
        place="main"
        startPosition={-1000}
      />
      <MainTitle title="наша деятельность" />
      <div
        className="activity-main__scroll-container"
        ref={scrollContainer}
      // onMouseDown={onMouseDown}
      // onMouseUp={onMouseUp}
      // onMouseMove={onMouseMove}
      >
        <CardsBox
          arrayCards={activityMainItems}
          currentPath={currentPath}
          place="activity-main"
        />
      </div>
      {/* <CardsBox
        arrayCards={activityMainItems}
        currentPath={currentPath}
        place="activity-main"
      /> */}
    </section>
  )
}

export default ActivityMain
