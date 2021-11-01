//Repetitive code infintely
// setInterval(
//     () => console.log('Hello after 2 seconds...'),
//     2000
// );


// Ctrl+c to kill it OR use clearInterval to programmatically killing this repetition // clearInterval(var)
//Example for 5 iterations
let counter=0;
var interval = setInterval(
    () => {
            counter += 1;
            console.log('Hello sahil');
            if(counter === 5){
                console.log('Done');
                clearInterval(interval);
            }
        },
    1000
);

//Example two : method two
// var startTime = new Date().getTime();
// var interval2 = setInterval(function(){
//     if(new Date().getTime() - startTime > 12000){
//         clearInterval(interval2);
//         return;
//     }
//     //do whatever here..
//     console.log('Hello Abhishek')
// }, 2000);

