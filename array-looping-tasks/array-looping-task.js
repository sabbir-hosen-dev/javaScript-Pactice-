// # array-looping-tasks

// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
 const colors = ['red', 'blue', 'green', 'yellow', 'orange']


const reversArray = [];

for(let rev of colors){
  reversArray.unshift(rev)
}
// console.log(reversArray)


// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`

// ---

// ### Task 2

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
  const numbers = [12, 98, 5, 41, 23, 78, 46];

  const evenNum = [];

  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      evenNum.push(numbers[i])
    }
  }
  // console.log(evenNum)

// **Output:**

// `[12, 98, 76, 46]`

// ---


// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**
var stringArray = ['Tom', 'Tim', 'Tin', 'Tik'];

let fullString  = '';

for(  string of stringArray){
  fullString = fullString.concat(string)
    
}

// console.log(fullString)

// **Output:**

// `'TomTimTinTik'`

// ---

// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
const statement = 'I am a hard working person';

// short cut wary 
const split = statement.split(" ").reverse().join(" ");
console.log(split)

// detels way 

// let positionRev = ''

// for(let i = split.length -1 ; i >= 0 ; i--){
//    positionRev = positionRev.concat(split[i]).concat(" ")
// }

// console.log(positionRev)

// **Output:**

// `'person working hard a am I'`

// ---
