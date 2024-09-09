// # js-problems-part2-practice-tasks

// ### Task -1:
// Find the lowest number in the array below.
// <br>
const heights2 = [167, 190, 120, 165, 4, 137];

function lowestNumber(array) {
  if (typeof array !== "object") {
    return "Invalite array";
  }

  let lowest = Math.min(...array);
  // for(let i = 0; i < array.length; i++) {
  //   if(lowest > array[i]){
  //     lowest = array[i]
  //   }
  // }
  return lowest;
}

const lowest = lowestNumber(heights2);
// console.log(lowest)

// ---

// ### Task -2:
// Find the friend with the smallest name.
// <br>
const names = ["rahim", "robin", "rafi", "ron", "rashed"];

function samllerSring(name) {
  if (typeof name !== "object") {
    return "Invalite Input";
  }

  let smallName = name[0];

  for (let i = 0; i < name.length; i++) {
    if (smallName.length > name[i].length) {
      smallName = name[i];
    }
  }

  return smallName;
}

const smallName = samllerSring(names);
// console.log(smallName)
// ---

// ### Task-3:
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

function totalCalculator(laptop, tablet, mobile) {
  if (
    typeof laptop !== "number" &&
    typeof tablet !== "number" &&
    typeof mobile !== "number"
  ) {
    return "Invalite Price";
  }
  return laptop + tablet + mobile;
}

// console.log(totalCalculator(35000, 15000, 20000));
// ---
// ### Task-4:

// You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

// **Input**

// <br>

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(array) {
  let total = 0;
  const size = array.length;
  for (let i = 0; i < array.length; i++) {
    total += array[i].price;
  }

  return Math.round(total / size);
}

const average = findAveragePhonePrice(phones);
// console.log(average);
// ---
// ### Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function calculateTotalMonthlySalary ( employees){
  let totalSalary = 0;
  for(let employe of employees){
    const currentSalary = employe.starting + (employe.increment * employe.experience);
    totalSalary += currentSalary;
  }
  let totalMonthlySalary = totalSalary / 12
  return Math.round(totalMonthlySalary);
}

const totalYearlySalary = calculateTotalMonthlySalary(employees);
console.log(totalYearlySalary)