const inputsSignIn = [
  {
    id: 1,
    name: "email",
    type: "email",
    required: true,
    autocomplete: "off",
    label: "эл. почтовый ящик",
    // placeholder: "email",
    minlength: 5,
    maxlength: 40,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    required: true,
    autocomplete: "off",
    label: "пароль",
    // placeholder: "Мухин",
    minlength: 6,
    maxlength: 20,
  },
]

export default inputsSignIn

