function FizzBuzz(num) {
    let fizz = "Fizz";
    let buzz = "Buzz";
    function byThree() {
      return num / 3 == Math.floor(num / 3);
    }
    function byFive() {
      return num / 5 == Math.floor(num / 5);
    }
    if (byThree() == true && byFive() == false) {
      return fizz;
    } else if (byFive() == true && byThree() == false) {
      return buzz;
    } else if (byFive() == true && byThree() == true) {
      return fizz + buzz;
    } else {
      return num;
    }
  }
  for (let i = 1; i <= 100; i++) {
    console.log(FizzBuzz(i));
  }
  