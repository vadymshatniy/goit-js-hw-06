const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.innerHTML = ingredient;
  item.setAttribute("class", "item");
  document.getElementById("ingredients").appendChild(item);
}