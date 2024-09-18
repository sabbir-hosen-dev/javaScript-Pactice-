function calculateTax(income, expense) {
  if (0 > income || 0 > expense || income < expense) {
    return "Invalid Input";
  }

  let difference = income - expense;
  let tax = difference * 0.2;

  return tax;
}

function sendNotification(email) {
  if (typeof email !== "string" || email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  let index = email.indexOf("@");
  let name = email.slice(0, index);
  let domen = email.slice(index + 1, email.length);

  return name + " sent you an email from " + domen;
}


// function checkDigitsInName(name) {
//   if (typeof name !== "string") {
//     return "Invalid Input";
//   }

//   return name.includes(1, 2, 3, 4, 5, 7, 8, 9, 0) ? true : false;
// }

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let totalPoint = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    totalPoint += 20;
  }

  return totalPoint >= 80 ? true : false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let completedPeople = waitingTimes.length;
  let sum = 0;

  for (let time of waitingTimes) {
    sum += time;
  }

  let averageTime = Math.round(sum / completedPeople);
  let waitingPeople = serialNumber - completedPeople - 1;

  return averageTime * waitingPeople;
}

console.log("Problem 1");

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));

console.log("problem 2");

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification(122));

console.log("problem 3");

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));

console.log("problem 4");

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);

console.log("Problem 5");

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
