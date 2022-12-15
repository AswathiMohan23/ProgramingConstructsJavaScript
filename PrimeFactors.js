//find prime factors of a number

function primeFactors(number) {
    const factors = [];
    let divisor = 2;
  
    while (number >= 2) {
      if (number % divisor == 0) {
        factors.push(divisor); // to insert elements in an array
        number = number / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  const number = 10;
  console.log('Prime factors of', number + ' : ', primeFactors(number));