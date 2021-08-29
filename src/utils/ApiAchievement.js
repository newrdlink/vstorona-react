import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headres = headers;
  }

  getAchievements() {
    return fetch(`${this.address}/achievements`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  createAchievement(data, token) {
    return fetch(`${this.address}/achievements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        type: data.type,
        link: data.link,
        title: data.title,
      })
    })
      .then(handlerResponse)
  }

  patchAchievement(data, token) {
    return fetch(`${this.address}/achievements`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        _id: data._id,
        link: data.link,
        type: data.type,
        title: data.title,
      })
    })
      .then(handlerResponse)
  }

  deleteAchievement(id, token) {
    return fetch(`${this.address}/achievements/${id}`, {
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