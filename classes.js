//Classes

class User {
    _name = ""; //just a naming std

    constructor(name){
        this._name = name;  
    }

    sayHi(){
        console.log(this._name);
    }
}

var user = new User("Sahil");
user.sayHi();
