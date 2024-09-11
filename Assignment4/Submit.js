function calculateTax(income, expense) {
  if (0 > income || 0 > expense || income < expense) {
    return "Invalid Input";
  }

  let difference = income - expense;
  let tax = difference * 0.2;

  return tax;
}

function sendNotification(email) {
  if (
    typeof email !== "string" ||
    !email.indexOf("@") ||
    email.indexOf("@") == -1
  ) {
    return "Invalid Email";
  }

  let index = email.indexOf("@");
  let name = email.slice(0, index);
  let domen = email.slice(index + 1, email.length);

  return name + " sent you an email from " + domen;
}

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
