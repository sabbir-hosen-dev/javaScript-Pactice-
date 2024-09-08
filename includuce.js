const number = [3,5,3,6,7,6,8,3,7,9,6,4,1,2,6];

function checkIncludes (array){

  const filter = [];

  for(let num of number){
    if(filter.includes(num) === false){
      filter.push(num)
    }
  }
  filter.sort();
  return filter;
}

const includes = checkIncludes(number);
// console.log(includes);


