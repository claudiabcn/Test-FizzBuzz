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
  if (history.length > 0) {
    historyContainer.classList.remove("hidden");
  }

  historyList.innerHTML = "";

  history
    .slice()
    .reverse()
    .forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.className = `p-3 rounded-lg bg-purple-50 border border-purple-200 flex justify-between items-center`;
      listItem.innerHTML = `
            <span class="text-base font-medium text-gray-600">${entry.input}</span>
            <span class="text-base font-medium text-gray-600">-></span>
            <span class="text-base font-bold text-purple-600">${entry.result}</span>
        `;
      historyList.appendChild(listItem);
    });
}

button.addEventListener("click", processFizzBuzz);
