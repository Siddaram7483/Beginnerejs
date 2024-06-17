let array=[5,6]
array.push(7,8);
array.unshift(1);// unshift will add the given input into existing array that is [5,6,7,8,] t0[1,5,6,7,8]
array.shift(5); // by using the shift we can delete the first element of an our array i.e [1,5,6,7,8]
array.pop(8)// it will delete the last element of any array tht is 8 from [5,6,7,8] to [5,6,7]
console.log(array);




function getElement(array2,position){
  return array2[position-1];
}
// let array2 =[1,2,3,4,5,6,7,8,9];
// console.log(getElement(array2,1));


// let mid=[5,6,7,8,9,10,11,12,13,14,15];
// console.log(mid.slice(1,3));//here we should n must give index so it will give index assigned values and (1(inclusive),3(exclusive)) here it will execute the index numbers between 1,3 so we got 6,7 as number which are assigned for index 1,3



//this will gives the copy of our array2
function arrayCopy(array2){
  return array2.slice(0 , array2.length);
}

let array2 =[1,2,3,4,5,6,7,8,9];
console.log(getElement(array2,1));


let array3 =arrayCopy(array);
array3[0]=null;
console.log(array3);


let mid=[5,6,7,8,9,10,11,12,13,14,15];
console.log(mid.slice(1,3));

//finding  the prime number using function 
function isPrime(num){
  for(let i=2; i<num; i++){
    if(num % i ===0){
      return false;
    }
  }
  return true;
}


let num =2;
let i=0;
while(i<5){
  if(isPrime(num)){
    console.log(num);
    i++;
  }
  num++;
}
//while loop with break statement

// console.log(isPrime(5));
// let num =2;
// let i=0;
// while(true){
//   if(isPrime(num)){
//     console.log(num);
//     i++;
//     if(i>=5){
//       break;
//     }
//   }
//   num++;
// }


