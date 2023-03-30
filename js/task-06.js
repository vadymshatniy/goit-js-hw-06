const input = document.querySelector("#validation-input");
const dataLength = document.querySelector('input[data-length]').dataset.length;

const checkSymbols = () => {
    const numberOfSymbols = input.value.trim().length;
    if (numberOfSymbols === Number(dataLength)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
};

input.addEventListener("blur", checkSymbols);

