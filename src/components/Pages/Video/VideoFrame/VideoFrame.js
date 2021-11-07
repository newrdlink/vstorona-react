import React from 'react'
import './VideoFrame.css'
import ButtonsBox from '../../../UI/ButtonsBox/ButtonsBox'
import { useHistory } from 'react-router'

const VideoFrame = ({ videoLink, startTime, title, description, _id, loggedIn }) => {

  const history = useHistory()
  const dateAddVideo = new Date(startTime)
  const dateVideo = `${dateAddVideo.getDate()}/${dateAddVideo.getMonth() + 1}/${dateAddVideo.getFullYear()}`

  // console.log(_id)
  return (
    <li className="video-frame">
      <div className="video-frame__data">
        <p className="video-frame__date">{dateVideo}</p>
        <h3 className="video-frame__title">{title}</h3>
        {
          description.map(el => <p className="video-frame__subtitle" key={el}>{el}</p>)
        }
      </div>
      <iframe
        className="video-frame__video"
        src={videoLink || `https://www.youtube.com/embed/L-iepu3EtyE`}
        title="YouTube video player2"
        // frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
      {loggedIn ?
        <ButtonsBox
          id={_id}
          // onClickRmBtn={onClickRmBtn}
          place="video"
          loggedIn={loggedIn}
          onClickAdd={() => history.push('/media/video/add-video')}
          onClickEdit={() => console.log(_id)}
          onClickRemove={() => console.log(_id)}
        /> : null
      }
    </li>
  )
}

export default VideoFrame