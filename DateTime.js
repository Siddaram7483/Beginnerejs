// let myDate = new Date();
let myDate=new Date();
console.log("Current Date and Time: " + myDate);

console.log("Year: " + myDate.getFullYear());
console.log("Month: " + (myDate.getMonth() + 1)); // Adding 1 to get the correct month number
console.log("Day of the Month: " + myDate.getDate());
console.log("Day of the Week: " + myDate.getDay());
console.log("Hours: " + myDate.getHours());
console.log("Minutes: " + myDate.getMinutes());
console.log("Seconds: " + myDate.getSeconds());







// using backTicks without concatanation (``)
console.log(`today total hours is:${myDate.getHours()}`);
console.log(`month  is:${myDate.getMonth()+1}`);
console.log(`date is :${myDate.getDate()}`);
console.log(`this year is :${myDate.getFullYear()}`);
console.log(`current time is :${myDate.getDay()}`);
console.log(`current minutes running is :${myDate.getMinutes()}`);
console.log(` current seconds are :${myDate.getSeconds()}`);

