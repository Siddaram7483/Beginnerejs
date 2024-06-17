let alarm = function(){
  console.log('wake up bro, its 5 o clock');
}
setTimeout(alarm,5000);
console.log('Alarm set');

//modern way to define functions in javascript with arrow function  with setTimeInterval and setTimeout

let alarm2 = () => console.log('wake up bro, its 6 o clock');
 let timerId = setTimeout(alarm , 3000);
console.log(`alarm set with timerId: ${timerId}`);
clearTimeout(timerId); //this will clear the console log of the timerId and only execute above log



//setInterval and clearInterval(IntervalId)
let alarm3 = () => console.log(`wake up bro, its  your morning. ${date = new Date()}`);
// console.log(alarm3);
let intervalId = setInterval(alarm3, 1000);
// console.log(`alarm set with inttervalId: ${intervalId}`);
// clearInterval(intervalId);
console.log(`alarm set with inttervalId: ${intervalId}`);
setTimeout( () => clearInterval(intervalId), 5000); //the setTime out will execute only upto 5 seconds of continous set intervals 
// setTimeout(alarm3);
