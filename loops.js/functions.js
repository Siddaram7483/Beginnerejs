const numbers=[1,2,3,4,5,6,7];
// const lastElement=numbers.pop();
// console.log(`lastElements :${lastElement}`);

// const firstElement=numbers.shift();
// console.log(`fistElements :${firstElement}`);


// const middleElement=numbers.splice(1,3);
// console.log(`middleElements :${middleElement}`);


// const a=[1,2,3,4,5];
// const b=[6,7,8,9,10];
// const combineElements =a.concat(b);
// console.log(combineElements);

const a =[1,2,3,4,5,6,7];
const b=[8,9,10,11,12];
const combined=a.concat(b);
//console.log(combined);

const firstslice =combined.slice(1,6);
console.log(firstslice);

let c=[1,2,3];
let d=[4,5,6];
//let combined12 =c.concat(d);
let combine=[...c, 12,...d,14];
console.log(combine)


const sidd =[1,2,3,4,5,6,7,8];
// for(let numbers of sidd)
// //console.log(numbers);
sidd.forEach((sidd , index)=>console.log(`at index, ${index} : ${sidd}`));



const courseName ='JAVASCRIPT IS FOR me';
const parts=courseName.toLowerCase()
.split(' ')
.join( );
// split('')
// .join('-');
console.log(parts);


