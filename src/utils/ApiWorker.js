import React from "react";
import handlerResponse from "./handlerRes";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  createWorker(data) {
    // console.log(data)
    return fetch(`${this.address}/workers`, {
      method: "POST",
      headers: this.headers,
      body: data,

    }).then(handlerResponse);
  }

  patchWorker(data) {
    // console.log(data)
    return fetch(`${this.address}/workers`, {
      method: "PATCH",
      headers: this.headers,
      body: data,

    }).then(handlerResponse);
  }

  getWorkers() {
    return fetch(`${this.address}/workers`, {
      method: "GET",
      headers: this.headers,
    }
    ).then(handlerResponse);
  }

  removeWorker(_id) {
    return fetch(`${this.address}/workers/${_id}`, {
      method: "DELETE",
      headers: this.headers,
    }
    )
  }
}

//создаем экземпляр
const api = new Api({
  // address: "http://localhost:3001",
  address: "https://api.vs.didrom.ru",
  headers: {
    "Contetnt-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
});

export default api;
