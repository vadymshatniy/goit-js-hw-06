const input = document.querySelector("#validation-input");
const dataLength = document.querySelector('input[data-length]').dataset.length;

const checkSymbols = () => {
    const numberOfSymbols = input.value.trim().length;
    if (numberOfSymbols == dataLength) {
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    }
};

input.addEventListener("blur", checkSymbols);

