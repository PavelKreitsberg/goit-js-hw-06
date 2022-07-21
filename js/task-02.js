const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

ingredients.map(value => {
  const el = document.createElement('li');
  el.textContent = value;
  el.className = 'item';
  list.append(el)
})