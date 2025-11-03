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
    let valor_entrada = 10;
    let respuesta_esperada = {
      status: "success",
      message: "Number processed correctly",
      data: {
        input: 10,
        result: "Buzz",
      },
    };
    let result = calculateFizzBuzz(valor_entrada);
    expect(typeof result.data.input).toBe("number");
    expect(result).toEqual(respuesta_esperada);
    expect(result.data.result).toBe("Buzz");
  });

  test("returns FizzBuzz when multiple of 3 and 5", () => {
    let valor_entrada = 15;
    let respuesta_esperada = {
      status: "success",
      message: "Number processed correctly",
      data: {
        input: 15,
        result: "FizzBuzz",
      },
    };
    let result = calculateFizzBuzz(valor_entrada);
    expect(typeof result.data.input).toBe("number");
    expect(result).toEqual(respuesta_esperada);
    expect(result.data.result).toBe("FizzBuzz");
  });

  test("returns number when is not multiple of 3 and 5", () => {
    let valor_entrada = 7;
    let respuesta_esperada = {
      status: "success",
      message: "Number processed correctly",
      data: {
        input: 7,
        result: "7",
      },
    };
    let result = calculateFizzBuzz(valor_entrada);
    expect(typeof result.data.input).toBe("number");
    expect(result).toEqual(respuesta_esperada);
    expect(result.data.result).toBe("7");
  });

  test('returns an error when "hola" is the input', () => {
    let valor_entrada = "hola";
    let respuesta_esperada = {
      status: "error",
      message: "Debes ingresar un número!",
      data: null,
    };

    let result = calculateFizzBuzz(valor_entrada);
    expect(result).toEqual(respuesta_esperada);
    expect(result.data).toBeNull();
    expect(result.status).toBe("error");
    expect(result.message).toBe("Debes ingresar un número!");
  });
});
