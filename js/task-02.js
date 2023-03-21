const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



for (i = 0; i < ingredients.length; i++) {
  const item = document.createElement("li");
  item.innerHTML = ingredients[i];
  item.setAttribute("class", "item");
  document.getElementById("ingredients").appendChild(item);
}