import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headres = headers;
  }

  getAlbums() {
    return fetch(`${this.address}/photo`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getAlbum(id) {
    return fetch(`${this.address}/photo/${id}`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  createAlbum(data, token) {
    return fetch(`${this.address}/photo`, {
      method: "POST",
      headers: {
        "Contetnt-Type": "multipart/form-data",
        "authorization": `Bearer ${token}`
      },
      body: data
    })
      .then(handlerResponse)
  }

  deleteAlbum(_id, token) {
    return fetch(`${this.address}/photo/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      }
    })
      .then(handlerResponse)
  }
}
//создаем экземпляр
const api = new Api({
  // address: "http://localhost:3002",
  address: "https://api.vs.didrom.ru",
  headers: {
    "Contetnt-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
});

export default api