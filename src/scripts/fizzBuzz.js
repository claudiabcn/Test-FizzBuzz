export function calculateFizzBuzz(num) {
  try {
    if (isNaN(num) || num === null || num === undefined) {
      throw new Error("Debes ingresar un número!");
    }
    if (num < 0) {
      throw new Error("El número debe ser positivo");
    }
    let result = "";
    if (num % 3 === 0 && num % 5 === 0) {
      result = "FizzBuzz";
    } else if (num % 3 === 0) {
      result = "Fizz";
    } else if (num % 5 === 0) {
      result = "Buzz";
    } else {
      result = num.toString();
    }
    return {
      status: "success",
      message: "Number processed correctly",
      data: {
        input: num,
        result: result,
      },
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
      data: null,
    };
  }
}
