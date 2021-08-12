import React from "react";
import handlerResponse from "./handlerRes";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  signIn(data) {
    return fetch(`${this.address}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then(handlerResponse);
  }

  signUp(data) {
    return fetch(`${this.address}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
        name: data.name,
      }),
    }).then(handlerResponse);
  }
}

const apiAuth = new Api({
  address: "http://localhost:5000",
  // address: "http://api.vstorona.didrom.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiAuth;