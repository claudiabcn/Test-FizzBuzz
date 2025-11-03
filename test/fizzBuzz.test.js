import { expect, describe, test } from "@jest/globals";
import { calculateFizzBuzz } from "../src/scripts/fizzBuzz.js";
describe("FizzBuzz test for multiples of 3 and 5", () => {
  test("returns Fizz when multiple of 3", () => {
    let valor_entrada = 9;
    let respuesta_esperada = {
      status: "success",
      message: "Number processed correctly",
      data: {
        input: 9,
        result: "Fizz",
      },
    };
    let result = calculateFizzBuzz(valor_entrada);

    expect(typeof result.data.input).toBe("number");
    expect(result).toEqual(respuesta_esperada);
    expect(result.data.result).toBe("Fizz");
  });

  test("returns Buzz when multiple of 5", () => {
    //Gherking test
    /**
     * Scenario: Número divisible por 5
     * Given un número 10
     * When el número es procesado
     * Then se muestra "Buzz"
     */
    // Arrange
    // Act
    // Assert
  });

  test("returns FizzBuzz when multiple of 3 and 5", () => {
    //Gherking test
    /**
     * Scenario: Número divisible por 3 y 5
     * Given un número 15
     * When el número es procesado
     * Then se muestra "FizzBuzz"
     */
  });

  test("returns number when is not multiple of 3 and 5", () => {
    //Gherking test
    /**
     * Scenario: Número no divisible por 3 ni 5
     * Given un número 8
     * When el número es procesado
     * Then se muestra el número ingresado
     */
  });
});
