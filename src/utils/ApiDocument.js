import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headres = headers;
  }

  getDocuments() {
    return fetch(`${this.address}/documents`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  createDocument(data, token) {
    return fetch(`${this.address}/documents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        link: data.link,
        type: data.type,
        title: data.title,
      })
    })
      .then(handlerResponse)
  }

  patchDocument(data, token) {
    return fetch(`${this.address}/documents`, {
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

  deleteDocument(id, token) {
    return fetch(`${this.address}/documents/${id}`, {
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
  address: "https://api.vstorona.ru",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api