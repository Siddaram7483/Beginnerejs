// arrays methos in javascript with array.filter((value,index)=> return true/value)
let arr=[1,2,3,4,5,6,7,8,9];
let odds= arr.filter((num, index) => {
  if(num%2===1){
    return true;
  }else{
    return false;
  }
});
console.log(odds);

// arrays methods in javascript with array.map((value) => return newValue))
let arr2=[1,2,3,4,5,6,7,8,9];
let evens = arr.filter((num, index)=>{
  if(num%2===0){
    return true;
  }else{
  return false;
  }
});
console.log(evens);

// map function in js here it will convert one forms into other forms like numbers into squares 
let arr3=[1,2,3,4,5];
let squares =arr3.map((num)=>{
  return num*num;
});
console.log(squares);

//practice set 
let Multiply =(num1 , num2)=>{
  return num1*num2;
}
console.log(Multiply(33,2));

// let printGreeting = ()=>{
//  return console.log('namaste');
// }
// printGreeting();
let printGreeting = ()=> console.log('namaste');// as a argument
let runTwice = inputFunction =>{
  inputFunction();
  inputFunction();
}
runTwice(printGreeting);