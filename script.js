const input = document.querySelector(".display");
const buttons = document.querySelectorAll(".cal-btn");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector("#icon-btn");
let string = "";
let result = 0;

const updateInput = (number) => {
  string += number;
  input.value = string;
};

const calculate = () => {
  result = eval(string);
  input.value = result;
  string = "";
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const number = e.target.innerText;
    if (number === "=") {
      calculate();
    } else if (number === "C") {
      input.value = "0";
      string = "";
    } else {
      updateInput(number);
    }
  });
});

clearButton.addEventListener("click", () => {
  input.value = "0";
  string = "";
});

backspaceButton.addEventListener("click", () => {
  string = string.slice(0, -1);
  input.value = string;
});
