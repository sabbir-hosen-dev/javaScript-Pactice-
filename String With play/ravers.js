const sentence = "I am lerning programing";


// for of loop 
let revers = " ";
for (const letter of sentence) {
  revers = letter + revers;
}
console.log(revers);




// for loop 
let rev = "";

for (let i = 0; i < sentence.length; i++) {
  rev = sentence[i] + rev;
}

console.log(rev)



// while loot 
let i = 0;
let rererssent = '';
while( i < sentence.length) {
  rererssent = sentence[i] + rererssent

  i++
}
console.log(rererssent)



// string 
const reversSentex = sentence.split('').reverse().join("");

console.log(reversSentex);

