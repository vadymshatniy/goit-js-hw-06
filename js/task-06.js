const input = document.querySelector("#validation-input");
const dataLength = document.querySelector('input[data-length]').dataset.length;

const checkSymbols = () => {
    const numberOfSymbols = input.value.split("").length;
    if (numberOfSymbols == dataLength) {
        input.style.borderColor = "#4caf50";
    } else {
        input.style.borderColor = "#f44336";
    }
};

input.addEventListener("blur", checkSymbols);