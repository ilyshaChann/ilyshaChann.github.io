const frstInpt = document.querySelector(".frstInput"),
    scndInput = document.querySelector(".scndInput"),
    btn = document.querySelector(".btn");
let result = document.querySelector(".result")

function sum (num1, num2) {
    return +num1 + +num2
}

function someEvent() {
    result.insertAdjacentText("beforeend", `${sum(frstInpt.value, scndInput.value)}`);
    btn.removeEventListener("click", someEvent);
}

btn.addEventListener("click", someEvent);