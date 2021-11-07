import React, { useState } from "react"
import './AddVideo.css'
import { getToken } from "../../../utils/Token"
import api from '../../../utils/ApiVideo'

const AddVideo = ({ dataUpdate }) => {

  const [videoData, setvideoData] = useState({})
  const [response, setResponse] = useState("")

  const onChange = (evt) => {
    if (response) {
      console.log("text in response")
      setResponse("")
    }
    setvideoData({ ...videoData, [evt.target.name]: evt.target.value })
  }

  const onSubmit = async (evt) => {
    const jwt = getToken()
    evt.preventDefault()
    // console.log(videoData)
    api.createVideo(videoData, jwt)
      .then((video) => {
        // console.log(doc)
        dataUpdate(video)
        setResponse("Видео добавлено")
      })
      .catch((error) => console.log(error))
  }

  return (
    <section className="add-collective">
      <form
        className="add-event__form"
        method="POST"
        onSubmit={onSubmit}
        name="addAntiCorrDoc">
        <textarea
          className="add-event__form-item add-event__form-item_type_title"
          type="text"
          name="title"
          onChange={(evt) => onChange(evt)}
          placeholder="Заголовок"
        />
        <input
          className="add-event__form-item add-event__form-item_type_name-collective"
          type="text"
          name="link"
          onChange={(evt) => onChange(evt)}
          placeholder="Ссылка на видео"
        />
        <textarea
          className="add-event__form-item add-event__form-item_type_description"
          type="text"
          name="description"
          onChange={(evt) => onChange(evt)}
          placeholder="Описание"
        />

        <button type="submit" className="add-event__form-button">Добавить новое видео</button>
        <p className="add-event__response">{response}</p>
      </form>
    </section>
  )
}

export default AddVideo
