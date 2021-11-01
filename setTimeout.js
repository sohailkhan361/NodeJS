//SetTimeout
setTimeout(
    () => {
        console.log('Hello After 4 Seconds...');
    },
    1000   //in milliseconds
);

//passing function to setTimeout
const func = () => {
    console.log('Second method for setTimeout...');
}
setTimeout(func, 2000);

//The third parameter onwards in setTimeout are the parameters for the function
//First parameter is the function, second is the timeout
const myfunc = (param, param2) => {
    console.log('Second method for setTimeout...', param, param2);
}
setTimeout(myfunc, 3000, 'Node','sahil');

//Use one function to multiple setTimout
const myFunction = () => {
    console.log('Hello after 4 sec: first');

    setTimeout( () => {
        console.log('Hello after 8 sec: First');
    }, 8000)
}

setTimeout(myFunction, 4000)

//Second way of setTimout using one function is
const myFunction2 = delay =>{
    console.log('Hello after ' + delay + ' Seconds: 2');
}

setTimeout(myFunction2, 2000, 4);
setTimeout(myFunction2, 4000, 8)