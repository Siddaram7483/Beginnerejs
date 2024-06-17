let products = {
  name: 'mobiles',
  device: 'os',
  type: 'android',
  'delivary-time': 'same-day'
};

function isIdenticalproducts(product1, product2) {
  if (typeof product1 !== 'object' || typeof product2 !== 'object') {
    console.log('parameter passed were not at all objects');
    return false;
  }

  if (product1 === product2) {
    return true;
  }
  
  if (product1.name === product2.name &&
      product1.device === product2.device &&
      product1.type === product2.type &&
      product1['delivary-time'] === product2['delivary-time']) {
    return true;
  } else {
    return false;
  }
}

let products1 = {
  name: 'mobiles',
  device: 'os',
  type: 'ios',
  'delivary-time': 'same-day'
};

let products2 = {
  name: 'mobiles',
  device: 'os',
  type: 'android',
  'delivary-time': 'same-day'
};
let products3 = {
  name: 'mobiles',
  device: 'ios',
  type: 'android',
  'delivary-time': 'same-day'
};


console.log(isIdenticalproducts(products1, products2)); // false
console.log(products1); // { name: 'mobiles', device: 'os', type: 'ios', 'delivary-time': 'same-day' }
console.log(products); // { name: 'mobiles', device: 'os', type: 'android', 'delivary-time': 'same-day' }
console.log(isIdenticalproducts(products2,products3));

