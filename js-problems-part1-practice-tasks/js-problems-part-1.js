// # js-problems-part1-practice-tasks

// ### Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function fahrenheitConvert(num) {
  return (num * 9) / 5 + 32;
}

const farentHeit = fahrenheitConvert(50);

// console.log(farentHeit)

// ---

// ### Task-2:

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input:
const numbers = [5,6,11,12,98, 5]

function repeatedNumber (array, number){
  let count = 0;
  for(let i = 0 ; i< array.length; i++){
    if(number == array[i]){
      count++
    }
  }
  return count
}



// find: 5
const result = repeatedNumber(numbers,5);
// console.log(result)
// output: 2

// <br/>

// sample-input:



// find: 25

const sampleResult = repeatedNumber(numbers,15
)

// console.log(sampleResult);

// output: 0



// ----
// ### Task-3:
// Write a function to count the number of vowels in a string.

function countVawels (str){
 let count = 0;
 const vowels = ["a","e","i","o","u","A","E","O","U","I"];

 for(let char of str){
  if(vowels.includes(char)){
    count++;
  }
 }
return count
}

const string =" Sabbir Hosen"
const vowelCount = countVawels(string);
console.log(vowelCount)

// ---
// ### Task-4:
// Write a function to find the longest word in a given string.

// sample-input:
// I am learning Programming to become a programmer

// sample-output: Programming

// ----
// ### Task-5:
// Generate a random number between 10 to 20.
