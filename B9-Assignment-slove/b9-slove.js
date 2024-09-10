
// Problem one
function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  const saveMony = ticketSale * 120 - (500 + 8 * 50);

  if (saveMony < 0) {
    return "Aska kom teket bikti hoisa ";
  } else {
    return saveMony;
  }
}

// console.log(calculateMoney(130));

function checkName(name) {

}

function countOne (num) {
  let count = 0;
  for(let i = 1 ; i <= 100; i++){
    if(i.toString().includes(num.toString())){
      count++
    }
  }
  return count
}
console.log(countOne(1));



function countNumber (num){
  let count = 0;
  for(let i = 1; i <= num; i++){
    count += i.toString().length
  }
  return count
}

console.log(countNumber(100))