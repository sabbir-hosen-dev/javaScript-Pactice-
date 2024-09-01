/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let oddCount = 81;
let oddSum = 0;

while (oddCount <= 131) {
  if (oddCount % 2 !== 0){
    oddSum += oddCount
  }
   oddCount++;
}

console.log("Odd Sum: " + oddSum)


let eventCount = 206 ;
let eventSum =0;

while (eventCount <= 311) {
  if(eventCount % 2 == 0){
    eventSum += eventCount
  }
  eventCount++
}

console.log("Event Sum: " + eventSum)