const inputs = [
  {
    id: 1,
    name: 'type',
    type: 'text',
    required: true,
    autocomplete: "off",
    label: 'Какой год',
    minlength: 2,
    maxlength: 120,
  },
  {
    id: 2,
    name: 'title',
    type: 'text',
    required: true,
    autocomplete: "off",
    label: 'Название достижения',
    minlength: 2,
    maxlength: 120,
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