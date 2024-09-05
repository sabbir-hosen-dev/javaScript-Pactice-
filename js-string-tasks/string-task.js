// ### Task-1: 
// Count how many times a string has the letter `a`

const text = "This is a sample containing a few A s."

let countA = 0;

for(let i = 0; i < text.length ; i++){
    if( text[i] == "a"){
        countA++
    }
}
// console.log(countA)

// ---
// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

let countAa = 0;
for(let i = 0; i < text.length ; i++){
    if( text[i] == "a" || text[i] == "A"){
        countAa++
    }
}
// console.log(countAa)

// ---

// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat facilis nobis!"


// for(let i = 0; i < string.length; i++){

//     if( string[i] == "a" ||string[i] == "A" || string[i] == "e" || string[i] == "E" || string[i] == "i" || string[i] == "I" || string[i] == "o" || string[i] == "u" || string[i] == "U" || string[i] == "O" ){

//         console.log(string[i])
// }
// }



// ---

// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// ---
// ### Task-5:
// Capitalize Every first Letter of each word in a String


const sentence = "Capitalize Every first Letter of each word in a String";

let words = sentence.split(" ");

let capStWord = [];

for(let i = 0 ;  i < words.length; i++){

    let word = words[i]
    let capWord = word.charAt(0).toUpperCase() + word.slice(1);
    capStWord.push(capWord)
}

let capStWordAll = capStWord.join(" ")

// console.log(capStWordAll)