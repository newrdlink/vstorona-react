import React from "react"
import './VideoContent.css'

import VideoFrame from "../VideoFrame/VideoFrame"

const VideoContent = ({ videoList = [], loggedIn, onClickRemove }) => {

  return (
    <ul className="video-content">
      {
        videoList.map(item =>
          <VideoFrame
            _id={item._id}
            key={item._id}
            videoLink={item.link}
            startTime={item.createdAt}
            title={item.title}
            description={item.description}
            loggedIn={loggedIn}
            onClickRemove={onClickRemove}
          />)
      }
    </ul>
  )
}

export default VideoContent
