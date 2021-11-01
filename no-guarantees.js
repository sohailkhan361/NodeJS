//It is just a request not a command, 
//no guarantee whether we will get the function executed after specified timeout
//Node decides when to execute the callback or the Web API stack functions
//It should be running after 0.5 seconds but the running stack is occupied infinitely due to which node gets busy with the
//  running stack and executes the API calls in the end after checking if there is anything in the API stack  
setTimeout(
    () => console.log('Hello from the Web API Stack'),
    500
);

//Infinte for loop to keep the stack busy
for(let i = 0; i< 1e10; i++){
    //Blocks the stack of running
    //block node synchronously
}