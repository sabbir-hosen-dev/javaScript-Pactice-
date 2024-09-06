function inchToFeet(inch) {
  const feet = inch / 12;
  return feet.toFixed();
}

const feet = inchToFeet(76);
// console.log(feet)

function incToFeet2(inch) {
  const feetInch = inch / 12;
  let reminderfeet = feetInch.toFixed();

  let inchR = inch % 12;

  return reminderfeet + " Feet " + inch + " inch";
}

const feetInch = incToFeet2(75);

console.log(feetInch);
