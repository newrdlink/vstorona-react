const inputs = [
  {
    id: 1,
    name: 'type',
    type: 'text',
    required: true,
    autocomplete: "off",
    label: 'Какой тип документа',
    minlength: 2,
    maxlength: 100,
  },
  {
    id: 2,
    name: 'title',
    type: 'text',
    required: true,
    autocomplete: "off",
    label: 'Название документа',
    minlength: 5,
    maxlength: 50,
  },
  {
    id: 3,
    name: 'link',
    type: 'text',
    required: true,
    autocomplete: "off",
    label: 'Ссылка на документ',
    minlength: 10,
    maxlength: 50,
  },
]

export default inputs