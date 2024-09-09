const number = [2,3,4,5,3,,2,6,7,9];

function biggestNumbr (num){
	let number = num[0] ;
	for(let i = 1; i < num.length; i++){
		if(num[i] > number){https://github.com/ProgrammingHero1
			number = num[i]
		}
	}
  return number;
}


const result = biggestNumbr(number);
console.log(result)