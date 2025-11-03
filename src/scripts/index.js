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
    }
  } catch (error) {
    result.textContent = "Error inesperado: " + error.message;
    console.error("Error completo:", error);
  }
}

button.addEventListener("click", processFizzBuzz);
