describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

it("should check if the number is divisible by 3", function() {
  expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
});
});