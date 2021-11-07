import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headres = headers;
  }

  getVideo(id) {
    return fetch(`${this.address}/video/${id}`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getAllVideo() {
    return fetch(`${this.address}/video`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  createVideo(data, token) {
    return fetch(`${this.address}/video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        link: data.link,
        description: data.description,
        title: data.title,
      })
    })
      .then(handlerResponse)
  }

  patchVideo(data, token) {
    return fetch(`${this.address}/video`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        _id: data._id,
        link: data.link,
        description: data.description,
        title: data.title,
      })
    })
      .then(handlerResponse)
  }

  deleteVideo(id, token) {
    return fetch(`${this.address}/video/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
    })
      .then(handlerResponse)
  }
}

const api = new Api({
  // address: 'http://localhost:3002',
  address: "https://api.vs.didrom.ru",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api