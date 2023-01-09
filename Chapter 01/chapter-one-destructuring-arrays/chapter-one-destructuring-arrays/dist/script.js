console.clear();

// Without Destructuring
const name = "John Maneul Lark";
let arr = name.split(' ');
let fName = arr[0];
let sName = arr[1];
console.log(`Without Destructuring -> ${fName} ${sName}`);

// With Destructuring
let [firstName, surname] = arr;
console.log(`With Destructuring -> ${firstName} ${surname}`);
let [first,, last] = arr;
console.log(`With Destructuring -> ${first} ${last}`);