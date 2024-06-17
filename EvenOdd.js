// let array =[1,2,3,4,5,6,78,9];
// function Even(array){
//   if(array%2===0){
//     console.log(`the numbers are even:${Even[array]}`);
// }else
//   console.log(`the numbers are odd`);
// }
// console.log(Even(array));

function displayEvenNumbers(array){
  for(const number of array)
    if(number%2===0)
    console.log(number);
}
displayEvenNumbers([1,2,3,4,5,67,8,9,10]);

function displayOddNumbers(array){
  for(const number of array)
    if(number%2 !=0)
    console.log(number);
}
displayOddNumbers([1,2,3,4,5,6,7,8,9,10]);



