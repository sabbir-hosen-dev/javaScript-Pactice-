/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */


// 1. 

let oddNumber = [];

for(let i = 61; i <= 100; i+=2){
  oddNumber.push(i)
}
console.log("odd number: " + oddNumber)

// 2. 
// for(let i = 61; i <= 100; i++) {
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }



// 1.\

// for (let i = 78 ; i <= 98; i+=2){
//   console.log(i)
// }


const evenNumber = []

for (let i = 78; i <= 98; i++){
  if(i % 2 === 0 ){
    evenNumber.push(i)
  }
}
console.log("even number: " + evenNumber)