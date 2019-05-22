describe("FizzBuzz", function () {
  var fizzBuzz;

  beforeEach(function () {
      fizzBuzz = new FizzBuzz();
  })
  
  describe('When playing fizzbuzz', function() {
      
    it("returns 'Fizz' when passed 3", function () {
        expect(fizzBuzz.play(3)).toEqual('Fizz');
    })

    it("returns 'Buzz' when passed 5", function () {
        expect(fizzBuzz.play(5)).toEqual('Buzz');
    })

    it("returns 'FizzBuzz' when passed 15", function () {
        expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    })

    it("returns a number i.e. 7 when passed 7", function () {
        expect(fizzBuzz.play(7)).toEqual(7);
    })

  })

})