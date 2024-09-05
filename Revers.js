const number = [1,2,3,4,5,6,7,8];


const rev = number.reverse();
// console.log(rev)

const forRev = [];

const numbers = [1,2,3,4,5,6,7,8];
for(num of numbers){
  forRev.unshift(num);
}

// console.log(forRev)



const numberP = [1,2,3,4,5,6,7,8];

const revP = [];

// for(let i = numberP.length ; i > 0 ; i--){
//   revP.push(numberP[i])
// }
// console.log(revP)
console.log(numberP.length -1 )

for(let i = numberP.length -1 ; i >= 0  ; i--){
  revP.push(numberP[i])
}
console.log(revP)