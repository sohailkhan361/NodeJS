//events module
const EventEmitter = require('events');

//creating an emitter instance
const myEmitter = new EventEmitter();

//Emit is for emitting the event
//Here we are emitting before the users subscribed to it
// it will not work like this
myEmitter.emit("Test_Event");  //doesn't work

//To resolve the above issue we can use setImmediate method
setImmediate( () => {
    myEmitter.emit("Test_Event");
})


//Test_Event is supposed to be the same throughout, It is the connection string
// 'on' function is the subscriber
//Different files can have different implementations for the event
myEmitter.on("Test_Event", () => {
    console.log("Test_Event was Fired");
})

myEmitter.on("Test_Event", () => {
    console.log("Test_Event was Fired");
})

myEmitter.on("Test_Event", () => {
    console.log("Test_Event was Fired");
})

