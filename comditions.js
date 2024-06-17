let number=1; //initialization
while(number<=10){   //condition is number<=10
  console.log(number);
  number++;//updating
}
console.log('the final value of numbers :' +number);



let num=0;//initialization
do{
  console.log(num);//this one execute atleast once also even while is wrong
  num++;//updating
}while(num<=7);//condition
console.log('the last one that stops when that number is not equal to :'+num);



// let eknumbers =0;
for(let eknum=1; eknum<=8; eknum++){
  console.log(eknum);
  lastExecuted_number=eknum;//reference needed in order to execute the outside loop console
}
console.log('the last executed number is  this:' +lastExecuted_number);


//arrays with conditions
let nums=[2,3,42,5,4,6,7,8,9];
for(let i=0;i<nums.length;i++){
  console.log(nums[i].length);
  // console.log(nums[i]);
  //console.log(i);
  
}
let num1=[3,5,7,9,11];
let sum=0;
for(let i=0;i<num1.length;i++){
  sum+=num1[i];
  //sum=sum+num1[i];
  console.log('some of arrays '+sum);
}
let nums2=[2,3,42,5,4,6,7,8,9];
let squares=[];
for(let i=0;i<nums.length;i++){
  squares[i]=nums2[i]+nums2[i];
  // squares=nums2[i]+nums2[i];
  console.log(squares);
}

