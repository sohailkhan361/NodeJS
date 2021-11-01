//importing file system as 'fs'
const fs = require('fs');

//__filename is coming from node env hidden function for current file
const data = fs.readFileSync(__filename);

//Execute the file in sync way: file 'data' first then comes 'TEST'
console.log('File data is :', data); 
console.log('TEST'); 
