const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const html = ingredients.reduce((acc, value) => acc += `<li>${value}</li>`, '')

list.insertAdjacentHTML('afterbegin', html)