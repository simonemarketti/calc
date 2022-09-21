// Calc commands
const keys = document.querySelectorAll(".number");
const screen = document.querySelector("#screen");
let number = screen.value;
let resultPrinted = "";

// Show number to screen
keys.forEach((key) => {
    key.addEventListener("click", () => {
        screen.value = (number += key.textContent).toString();
    });
});

// Delete number
function del() {
    number = number.slice(0, number.length - 1);
    screen.value = number;
}

// Make calculations
function equal() {
    let result = eval(number);
    resultPrinted = result;
    screen.value = result;
    number = result;
}

// Reset
function reset() {
    resultPrinted = "";
    number = "";
    screen.value = "";
}


// Switch theme
const body = document.querySelector("body");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

one.addEventListener("click", function () {
    body.classList.remove("theme2");
    body.classList.remove("theme3");
});
two.addEventListener("click", function () {
    body.classList.add("theme2");
    body.classList.remove("theme3");
});
three.addEventListener("click", function () {
    body.classList.remove("theme2");
    body.classList.add("theme3");
});
