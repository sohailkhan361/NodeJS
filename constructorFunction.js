//Create multiple objects with constructor function

//Constructor 
function Person(){
    this.name = 'John',
    this.age = 23,
    this.greet = function () {
        console.log('Hello')
    }
}

//Create objects
const person1 = new Person();
const person2 = new Person();

//access properties 
console.log(person1.name);
console.log(person2.name);

//Constructor function with parameters :
//Constructor 
function PersonParams(name , age){
    this.name = name,
    this.age = age,
    this.greet = function () {
        console.log('Hello'+this.name)
    }
}

//Create objects
const person3 = new PersonParams('Joe', 23);
const person4 = new PersonParams('Johny', 24);

//access properties 
console.log(person3.name);
console.log(person4.name);

//Replacing the value
person4.name = 'Sohail';
console.log(person4.name);

//Adding a property using Function prototype:
// all the ES6 object gets it after adding 
Person.prototype.gender = 'Male';

console.log(person1.gender);
console.log(person2.gender);

