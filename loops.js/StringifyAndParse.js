let product={
  name:'t-shirt',
  price:6689,
  rating:{
    stars:4.5,
    noOfReviews:450,
  }
};
console.log(product);
console.log(typeof(product));// chcks the type of product whether it is a string ot object
let str=JSON.stringify(product);//it will convert the object into strings using JSON.stringify() method
console.log(str);
let newProduct=JSON.parse(str);//it will convert the object into strings using JSON.parse() method it will convrt the string into original object
console.log(newProduct);
console.log(typeof(str));


// localStorage.setItem('name','siddaram kusur');
// localStorage.setItem('wears', 'red');
// console.log(localStorage.getItem('name'),'wears');