/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let sum = 0;
// for(let i = 1; i < 100 ; i++){
//   sum += i;
//   if(sum >= 100){
//     console.log("count: ", i, " Sum: ", sum);
//     break;
//   }
// }

let sum = 0;
let count = 1;

while ( count < 100){
  sum += count;
  if(sum >= 100){
    console.log("Count:", count , " Sum:", sum);
    break;
  }
  count++;
}