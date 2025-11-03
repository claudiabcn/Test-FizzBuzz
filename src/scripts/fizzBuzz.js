function calculateFizzBuzz(num) {
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
}

console.log(calculateFizzBuzz(5))
console.log(calculateFizzBuzz(15))
console.log(calculateFizzBuzz(3))
console.log(calculateFizzBuzz(2))
console.log(calculateFizzBuzz("Holaaa"))
console.log(calculateFizzBuzz(-1))
