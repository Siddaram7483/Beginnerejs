const obj={a:1,b:2,c:3};
for(let key in obj){
  if(obj[key]%2===0)
 continue;

 console.log(obj[key]);
}


const array=[1,2,3,4,5];
for(let element of array){
  if(element%2===0){
    continue;
  }
  console.log(element);
}