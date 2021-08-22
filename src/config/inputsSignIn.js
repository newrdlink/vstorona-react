const inputsSignIn = [
  {
    id: 1,
    name: "email",
    type: "email",
    required: true,
    autocomplete: "off",
    label: "Ваш эл. почтовый ящик",
    // placeholder: "email",
    minlength: 5,
    maxlength: 25,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    required: true,
    autocomplete: "off",
    label: "Ваш пароль",
    // placeholder: "Мухин",
    minlength: 6,
    maxlength: 20,
  },
]

export default inputsSignIn

