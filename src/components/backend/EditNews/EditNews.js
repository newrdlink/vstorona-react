import React, { useState, useEffect } from 'react'
import './EditNews.css'

import { getToken } from '../../../utils/Token'
import api from '../../../utils/ApiNews'

const EditNews = ({ newsAll, idEditingNews }) => {
  const [files, setFiles] = useState([])
  // const [editNews, setEditNews] = useState({})
  const [newsData, setNewsData] = useState({})
  const [response, setResponse] = useState("")
  // console.log(newsAll)
  // console.log(idEditingNews)
  useEffect(() => {
    const editNewsClicked = newsAll.find((el) => el._id === idEditingNews)
    setNewsData(editNewsClicked)
  }, [idEditingNews, newsAll])

  // console.log(newsData)

  const onChange = (evt) => {
    if (response) {
      console.log("text in response")
      setResponse("")
    }
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
    // console.log(newsData)
    let data = new FormData();

    if (files.length > 0) {
      files.forEach((file) => {
        data.append('imageFilesNews', file, file.name)
      })
    }

    data.append('newsData', JSON.stringify(newsData))

    api.updateNews(data, jwt)
      .then((news) => {
        console.log(news)
        setResponse("Новость изменена")
        // setFiles([])
        // setEventData({})
      })
      .catch((error) => console.log(error))
  }

  return (
    <section className="add-event">
      <form
        className="add-event__form"
        method="POST"
        onSubmit={onSubmit}
        name="addEvent">
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
        <textarea
          className="add-event__form-item add-event__form-item_type_title"
          type="text"
          name="title"
          onChange={(evt) => onChange(evt)}
          placeholder="Заголовок"
          value={newsData.title || ''}
        />
        <textarea
          className="add-event__form-item add-event__form-item_type_subtitle"
          type="text"
          name="subtitle"
          onChange={(evt) => onChange(evt)}
          placeholder="Подзаголовок"
          value={newsData.subtitle || ''}
        />
        <textarea
          className="add-event__form-item add-event__form-item_type_description"
          type="text"
          name="description"
          onChange={(evt) => onChange(evt)}
          placeholder="Описание"
          value={newsData.description || ''}
        />
        <button type="submit" className="add-event__form-button">Изменить новость</button>
        <p className="add-event__response">{response}</p>
      </form>
    </section>
  )
}

export default EditNews
