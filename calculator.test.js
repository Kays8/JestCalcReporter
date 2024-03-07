const mathOperations = require("./calculator");

describe("TC Math 1", () => {
  test("TUnit sum", () => {
    expect(mathOperations.sum(2, 3)).toBe(5);
  });

  test("TUnit diff", () => {
    expect(mathOperations.diff(5, 3)).toBe(2);
  });

  test("TUnit products", () => {
    expect(mathOperations.products(2, 4)).toBe(8);
  });
});

describe("TC Math 2", () => {
  test("TUnit sum", () => {
    //
    var result = mathOperations.sum(2, 3);
    //
    expect(result).toBe(5);
  });

  test("TUnit diff", () => {
    var result = mathOperations.diff(2, 3);
    expect(result).toBe(-1);
  });

  test("TUnit products", () => {
    var result = mathOperations.products(2, 3);
    expect(result).toBe(6);
  });
});
