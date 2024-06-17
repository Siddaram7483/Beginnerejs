const dog={
  name:'streetDog',
  breed:'labro',
  age:4,
  weightInPounds:60,
  eat:function(){
    console.log('eating');
  },
    bark:function(){
      console.log('barking');
    },
  }


//console.log(dog);
function getdog(age,name,breed,weightInPounds){
  return{
  name,
  breed,
  age,
  weightInPounds,
  eat(){
    console.log('eating food');
  },
  bark(){
      console.log('barking');
     }
  }
}
const anotherDog=getdog('streetdog','labro' , 4 , 60);
console.log(anotherDog);