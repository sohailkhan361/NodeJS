// Destructuring the object :
const person = {
    name: 'Abhishek bandar',
    age: 23,
    gender: 'Male'
}

//conventional way of doing this :
let name1 = person.name;
let age1 = person.age;
let gender1 = person.gender;

console.log("Old way 1:", name1, age1, gender1);

// ES6 feature to get the values out of that object:
// make sure the variable names we use are excatly the same
let { name, age, gender } = person;

console.log("ES6 using same names way 2:", name, age, gender);

// Object destructuring using different variable names:
let { name: name2, age: age2, gender: gender2 } = person;

console.log("ES6 using different names:", name2, age2, gender2);

//Array destructuring :
const arrValue = ['one','two','three'];

const [x,y,z] =  arrValue;
console.log('Array destructuring ',x, y, z);

// array destructuring while skipping an item:
const [ a , ,c ] = arrValue
console.log('Only first and Third element gets destructured:',a,c)

//Rest operator:
const arr = ['one','two','three', 'four'];

//destructure the elements in array:
// first value in s and rest in t
const [ s, ...t] = arr;
console.log('Rest operator', s, t)

//also for object:
let {name: name3, ...rest} = person;
console.log(name3);
console.log(rest);
