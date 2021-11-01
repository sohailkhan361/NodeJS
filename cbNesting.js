//Callback nesting
const fs = require('fs');

//First read the file and then write the data to another file 
//callbacks create the thread to run background process here...
// here, fs.readFile asks the node compiler to continue running other processes while its reading the file
//   and once done with reading, it will come back later to execute the callback function 
fs.readFile( __filename, function cb1(err, data){

    fs.writeFile(__filename + '.copy', data, function cb2(err){
        //Nest more callbacks here...
        // create a new file with __filename.copy name
    } )

});

console.log('TEST')

