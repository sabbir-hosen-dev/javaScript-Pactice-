// squire

function squire(num) {
  let squire = num * num;

  console.log(num);
}

// squire(4);

function oddCheck(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

const odd = oddCheck(4);
console.log(odd);

function evenCheck(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

const even = evenCheck(4);

console.log(even);


function checkOddEven (num) {
  return  num % 2 == 0 ? "even" : "odd";
}

const check = checkOddEven(3)

console.log(check)