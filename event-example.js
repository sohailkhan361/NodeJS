//events module
const EventEmitter = require('events');

//creating an emitter instance
const myEmitter = new EventEmitter();

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

//emit is for emitting the event
myEmitter.emit("Test_Event");