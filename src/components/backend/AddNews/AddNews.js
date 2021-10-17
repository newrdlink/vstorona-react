import React, { useState } from 'react'
import './AddNews.css'

import { getToken } from '../../../utils/Token'
import apiAddNews from '../../../utils/ApiNews'

const AddNews = () => {

  const [files, setFiles] = useState([])
  const [newsData, setNewsData] = useState({})
  const [response, setResponse] = useState("")

  const onChange = (evt) => {
    if (response) {
      console.log("text in response")
      setResponse("")
    }
    // console.log(evt.target.name)
    // console.log(evt.target.value)
    setNewsData({ ...newsData, [evt.target.name]: evt.target.value })
  }

  const handleChangeFiles = (evt) => {
    const files = Array.from(evt.target.files)
    // console.log()
    setFiles(files)
  }

  const onSubmit = async (evt) => {
    const jwt = getToken()
    evt.preventDefault()
    let data = new FormData();

    files.forEach((file) => {
      data.append('imageFilesNews', file, file.name)
    })

    data.append('newsData', JSON.stringify(newsData))

    apiAddNews.createNews(data, jwt)
      .then((event) => {
        console.log(event)
        setResponse("Новость опубликована")
        // setFiles([])
        // setEventData({})
      })
      .catch((error) => console.log(error))
  }
  // console.log(files)

  return (
    <section className="add-event">
      <form
        className="add-event__form"
        method="POST"
        onSubmit={onSubmit}
        name="addEvent">
        {/* <select
          className="add-event__form-item add-event__form-item_type_date"
          defaultValue="default"
          name="type"
          onChange={(evt) => onChange(evt)} >
          <option value="festival">фестиваль или конкурс</option>
          <option value="default">событие</option>
        </select> */}
        <label className="add-event__form-label">
          5 фотографий, имена файлов от 1 до 5 (1.png, 2.jpg и т.д.)
          <input
            className="add-event__form-item add-event__form-item_type_files"
            type="file"
            multiple={true}
            name="files"
            onChange={handleChangeFiles}
          />
        </label>
        <input
          className="add-event__form-item add-event__form-item_type_date"
          name="createdAt"
          type="datetime-local"
          min="2018-01-01"
          max="2038-12-31"
          onChange={(evt) => onChange(evt)} />
        <textarea
          className="add-event__form-item add-event__form-item_type_title"
          type="text"
          name="title"
          onChange={(evt) => onChange(evt)}
          placeholder="Заголовок"
        />
        <textarea
          className="add-event__form-item add-event__form-item_type_subtitle"
          type="text"
          name="subtitle"
          onChange={(evt) => onChange(evt)}
          placeholder="Подзаголовок"
        />
        <textarea
          className="add-event__form-item add-event__form-item_type_description"
          type="text"
          name="description"
          onChange={(evt) => onChange(evt)}
          placeholder="Описание"
        />
        <button type="submit" className="add-event__form-button">Опубликовать новость</button>
        <p className="add-event__response">{response}</p>
      </form>
    </section>
  )
}

export default AddNews