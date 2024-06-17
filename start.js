let job='software engineer';

// if(job=='software developer'){
//   console.log('writes codes');
// }else if 
// (job==='software engineer'){
//     console.log('doesnt writes code');
// }
switch(job){
  case "software developer":
  console.log('writes codes');
  break;

  case "software engineer":
    console.log('designs the user interface');
    break;
}

//setInterval and clearInterval(IntervalId)
let alarm3 = () => console.log(`wake up bro, its  your morning. ${date = new Date()}`);
// console.log(alarm3);
let intervalId = setInterval(alarm3, 1000);
// console.log(`alarm set with inttervalId: ${intervalId}`);
// clearInterval(intervalId);
console.log(`alarm set with inttervalId: ${intervalId}`);
clearInterval(intervalId);
// setTimeout(alarm3);