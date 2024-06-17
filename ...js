function arrayCopy(array){
  return array.slice(0 , array.length);
}
let array =[1,2,3,4,5,6,7,8,9];
let array2 =arrayCopy(array);
array2[0]=null;
console.log(array);
console.log(array2);


// function arrayCopy(array) {
//   return array.slice(0, array.length);
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let array2 = arrayCopy(array);
// array2[0] = null;
// console.log(array);
// console.log(array2);

function arrCopy(arr){
  return arr.slice(0,arr.length);
}

let arr=[4,5,6,7];
let arr2=arrCopy(arr);
arr2[0]=null;
console.log(arr);
console.log(arr2);


// prting the values no from 10 to 1
for(let i=10; i>0; i--){
  console.log(i);
}
//same one with 10-i
for(let i=0; i<10; i++){
  console.log(10-i);
}

//prints the onlt poasitive numbers when num[i]<0 with continue 
let num = [1,-6,5,7,-98];
for(let i=0; i<num.length;i++){
  if(num[i]<0) continue;
    console.log(num[i]);
}


let arr123 =['kg coding' ,'javascript', 'course', 'is' ,'best'];
let result='';
for(let i=0; i<arr123.length; i++){
  result+= arr123[i] + ' ';
}

// console.log(result);
console.log(arr123.join(' '));

