// Dates


let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);  // --> date is an object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myNewDate = new Date(2024, 0, 1, 5,3)
console.log(myNewDate.toLocaleString());

let myDate2 = new Date("2024-01-01")
console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getDate());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: "long",
});