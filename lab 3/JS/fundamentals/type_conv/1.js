let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); 

let age = Number("an arbitrary string instead of a number");

alert(age); /