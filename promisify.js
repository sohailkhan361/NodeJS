//Promises
//It will wait for the data and latest way of doing this conversion of sync to async

const fs = require('fs');
const util = require('util');

//Convert of any function into a promise 
const readFile = util.promisify(fs.readFile);

//Decorate the main() function as 'async'
async function main() {

    //no need to use the callback function, use await keyword to wait for the data
    const data = await readFile(__filename);

    console.log('File data is :',data);
}

main();

console.log('TEST')