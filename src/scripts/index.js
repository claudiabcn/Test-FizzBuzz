import { calculateFizzBuzz } from "./fizzBuzz.js";
const history = [];
function processFizzBuzz() {
  let number = parseInt(buzzNumber.value);
  let response = calculateFizzBuzz(number);
  if (response.status === "error") {
    result.textContent = response.message;
  } else {
    result.textContent = response.data.result;
    history.push(response.data);
  }
}
button.addEventListener("click", processFizzBuzz);
