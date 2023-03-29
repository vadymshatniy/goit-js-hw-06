const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

let fillOutput = () => {
    if (input.value.trim() == "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = input.value.trim();
    }
};
input.addEventListener("input", fillOutput);




