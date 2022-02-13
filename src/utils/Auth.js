import React from "react";
import handlerResponse from "./handlerRes";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  pullUserData(data) {
    return fetch(`${this.address}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${data}`
      },
    }).then(handlerResponse)
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
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
      }),
    }).then(handlerResponse);
  }
}

const apiAuth = new Api({
  // address: "http://localhost:3002",
  address: "https://api.vstorona.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiAuth;
