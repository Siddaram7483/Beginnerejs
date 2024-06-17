{
  function maxNum(num1,num2){
  return num1>=num2?num1:num2;
}
console.log(maxNum(2,1));
}
let a;
let b;
a=2;
b=3;
console.log(a>b);
function FizzBuzz(number){
  if(number%3===0 &&number%5===0)
    return 'FizzBuzz';
  else if(number%3===0)
    return 'Fizz';
  else if(number%5===0)
  return 'Buzz';
  else 
  return number;
  
}
console.log(FizzBuzz(25));//Add numbers like both divisible by 3n5, or 3,0r 5 or just a numbers
console.log(FizzBuzz(9));
console.log(FizzBuzz(15));
console.log(FizzBuzz(7));

// function SiddRam(float){
//   if(float===true||float===false){
//     return 'SiddRam';
//   }else
//   return float;
// }
// console.log(SiddRam(4.4,5.6));