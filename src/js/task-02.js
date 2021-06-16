const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.log(ingredients)
const arrayEl = document.querySelector('#ingredients');

const addItemEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;

  return itemEl;
});

arrayEl.append(...addItemEl);
console.log(arrayEl)