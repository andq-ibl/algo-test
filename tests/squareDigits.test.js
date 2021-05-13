const squareDigits = require("../algo/squareDigits");

test("Case 1: input 10 output 10", () => {
  expect(squareDigits(10)).toBe(10);
});

test("Case 2: input 9119 output 811181", () => {
  expect(squareDigits(9119)).toBe(811181);
});

test("Case 3: input 12345 output 1491625", () => {
  expect(squareDigits(12345)).toBe(1491625);
});

test("Case 4: input 67890 output 364964810", () => {
  expect(squareDigits(67890)).toBe(364964810);
});

test("Case 5: input 111222000999 output 111444000818181", () => {
  expect(squareDigits(111222000999)).toBe(111444000818181);
});
