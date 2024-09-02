

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let oddSum = 0;

for(let i = 91; i <= 129; i+=2 ){
  oddSum += i
}
console.log("odd sum: " , oddSum)


let eventSum = 0;

for(let i = 51; i <= 85; i++) {
  if(i % 2 === 0){
    eventSum += i
  }
}

console.log("event sumk: ", eventSum)