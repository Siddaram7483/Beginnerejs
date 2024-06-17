 // anonymous functions in javascript 
 let sum = function(num1,num2){
  return num1+num2;
}
newsum = sum;
console.log(sum(4,5));
console.log(newsum(5,5));


//((4+5)+7)----> functions having arguments and function property or u can call methods of functions with arguments
let sumThreeNumbers = function(num1,num2,num3, sumTwoNumbers){
  let sum1 = sumTwoNumbers(num1, num2);
  return sumTwoNumbers(sum1, num3);
}
console.log(sumThreeNumbers(4,5,6, sum));
console.log(sumThreeNumbers);
console.log(typeof sumThreeNumbers);


//ARROW FUNCTIONS 
let sidd = (num6, num7) =>{
  return num6+num7;
}
console.log(sidd(22,23));


// arrow function with no round braces or single argument
let square = num9 =>{
  return num9*num9;
}
console.log(square(9));