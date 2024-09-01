/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let count = 61;

let oddNumber = [];

while (count <= 100) {

  if(count % 2 !== 0){
    oddNumber.push(count);
  }
  count++;
}

console.log("Odd Number:" + oddNumber);

let countEvent = 78;
let evenNumber = [];

while (countEvent <= 98){
  if(countEvent % 2 == 0){
    evenNumber.push(countEvent)
  }
  countEvent++
}

console.log("Event number: " + evenNumber)
