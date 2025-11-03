import { calculateFizzBuzz } from "./fizzBuzz.js";

const history = [];

function processFizzBuzz() {
  try {
    let number = parseInt(buzzNumber.value);
    let response = calculateFizzBuzz(number);
    if (response.status === "error") {
      result.textContent = response.message;
    } else {
      result.textContent = response.data.result;
      history.push(response.data);
      updateHistoryDisplay();
    }
  } catch (error) {
    result.textContent = "Error inesperado: " + error.message;
    console.error("Error completo:", error);
  }
}

function updateHistoryDisplay() {
  historyList.innerHTML = "";
  history.slice().forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${entry.input}</span>
    <span>${entry.result}</span>`;
    historyList.appendChild(listItem);
  });
}

button.addEventListener("click", processFizzBuzz);
