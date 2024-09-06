// # Simple function Related Practice Tasks

// ### Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiplyFourParamater(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

const fourMultipyResult = multiplyFourParamater(34, 53, 2, 1);
console.log(fourMultipyResult);
// ---

// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(num) {
  if (num % 2 !== 0) {
    return num * 2;
  } else {
    return num / 2;
  }
}

const oddEvenStetment = oddEven(3);

console.log(oddEvenStetment);
// ---

// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
  let sum = 0;
  const size = numbers.length;
  for (let number of numbers) {
    sum += number;
  }

  let average = sum / size;
  return average;
}

const numbers = [98, 90, 95, 89, 85];
let average = make_avg(numbers);

console.log(average);

// ---

// ### Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary) {
  let count = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      count++;
    }
  }
  return count;
}

let count = count_zero("10101010");

console.log(count);

// ---

// ### Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function odd_even(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const oddEvenResult = odd_even(3);

console.log(oddEvenResult);
