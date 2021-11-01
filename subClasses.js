//Class - Base
class Animal {
    name = "name";
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noice.`);
    }
}
var animal=new Animal('dog');
animal.speak();

//Derived class
class Dog extends Animal {
    constructor(name) {
        super(name); //call the super class constructor and pass in the name parameter
    }

    barks() {
        console.log(`${this.name} barks`);
    }
}

//d is able to access both super and its own class methods
let d = new Dog('Pug');
d.speak();
d.barks();
