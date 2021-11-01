//importing file system as 'fs'
const fs = require('fs');

// __filename is coming from node env hidden function for current file
// callback function named as cb (userdefined name it anything you like) 
fs.readFile(__filename, function cb(err , data) {
    console.log('File data is:', data)
});

//Execute the file in Async way:  first comes 'TEST' then file 'data': async now
console.log('TEST'); 
