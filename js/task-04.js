let counterValue = 0;
const showingValue = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
decrement.addEventListener("click", () => {
    counterValue -= 1;
    showingValue.innerHTML = counterValue;
});
increment.addEventListener("click", () => {
    counterValue += 1;
    showingValue.innerHTML = counterValue;
});
