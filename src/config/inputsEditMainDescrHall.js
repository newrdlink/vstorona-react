const inputs = [
  {
    id: 1,
    name: "price",
    type: "number",
    autocomplete: "off",
    label: "Введите цену",
    required: true,
    minlength: 3,
    maxlength: 6,
  },
  {
    id: 2,
    name: 'linkToPrice',
    type: 'text',
    required: true,
    autocomplete: "off",
    label: 'Ссылка на прайс',
    minlength: 5,
    maxlength: 120,
  },
]

export default inputs
