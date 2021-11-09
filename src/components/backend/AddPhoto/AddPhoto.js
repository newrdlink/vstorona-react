import React, { useState } from 'react'
import './AddPhoto.css'
import { getToken } from '../../../utils/Token'
import api from '../../../utils/ApiPhoto'

const AddPhoto = ({ dataUpdate }) => {

  const [files, setFiles] = useState([])
  const [albumData, setAlbumData] = useState({})
  const [response, setResponse] = useState("")

  const onChange = (evt) => {
    if (response) {
      console.log("text in response")
      setResponse("")
    }
    setAlbumData({ ...albumData, [evt.target.name]: evt.target.value })
  }

  const handleChangeFiles = (evt) => {
    const files = Array.from(evt.target.files)
    setFiles(files)
  }

  const onSubmit = async (evt) => {
    const jwt = getToken()
    evt.preventDefault()
    let data = new FormData();

    files.forEach((file) => {
      data.append('imageFilesAlbum', file, file.name)
    })

    data.append('albumData', JSON.stringify(albumData))

    api.createAlbum(data, jwt)
      .then((album) => {
        // console.log(event)
        dataUpdate(album)
        setResponse("Альбом добавлен")
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
          10 фотографий, имена файлов от 1 до 10 (1.png, 2.jpg и т.д.)
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
        <input
          className="add-event__form-item add-event__form-item_type_name-collective"
          type="text"
          name="link"
          onChange={(evt) => onChange(evt)}
          placeholder="Ссылка на Вконтакте"
        />
        <textarea
          className="add-event__form-item add-event__form-item_type_title"
          type="text"
          name="title"
          onChange={(evt) => onChange(evt)}
          placeholder="Заголовок"
        />
        <button type="submit" className="add-event__form-button">Отправить событие</button>
        <p className="add-event__response">{response}</p>
      </form>
    </section>
  )
}

export default AddPhoto
