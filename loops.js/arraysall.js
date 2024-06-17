let p={sidd:'ijkl'};
let q={sidd:'ijkl'};
console.log(p==q);//because the address of the object p and q are placed in different memory location and if u use the === then also the output is same as first output because in objects it will just chck the reference which is stored in same location or different location
let a=5;
let b=a;
a=8;
console.log(`a=${a},b=${b}`);// here a value is just copied when i declare the a=8; when i have already a=5;


let products={
  name:'mobiles',
  device:'os',
  type:'android',
  'delivary-time':'same-day'
};
let all=products;
console.log(products);
all.type='ios';
console.log(products);
all.device='linux os';
console.log(all);
console.log(products ['delivary-time']);
//above all whenever i am changing onlt the reference is changing not the object value


let obj={
  mssg:'good job',
  status:'compltd',
};
console.log(obj);
let {mssg,status}=obj;// we did here de-structuring means we deleted the mssg and status and only remains the values of keys(objects=key:value pair)
//let {status}=obj;
console.log(mssg);
console.log(status);

function isIdenticalproducts(product1, product2){
  if(typeof product1 !=='object'||typeof product2 !=='object'){
    console.log('parameter passed were not at all objects');
    return false;
  }

  if(product1==product2){
    return true;
  }
  if(product1.name===products2.name &&
    product1.device===products2.device&&
    product1.type===products2.type){
      return true;
    }else{
      return false;
    }
}

