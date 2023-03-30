function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  let color = getRandomHexColor();  
  body.style.backgroundColor = color;
  span.innerText = color;
};

