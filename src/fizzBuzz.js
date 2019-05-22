function FizzBuzz() {
}

FizzBuzz.prototype.play = function(i) {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'FizzBuzz';
    }
    else if (i % 5 === 0) {
      return 'Buzz';
    }
    else if (i % 3 === 0) {
      return 'Fizz';
    }
    else {
      return i;
    }
  }

var fizzbuzz = new FizzBuzz();

for (i = 0; i < 100; i++) {
  console.log(fizzbuzz.play(i));
} 