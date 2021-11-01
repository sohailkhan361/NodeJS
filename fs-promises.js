//Another way of converting a function to the promise
const { readFile } = require('fs').promises;

//Rest everything is same... (saved 3 lines of code here)
async function main() {
    const data = await readFile(__filename);
    console.log('File data is :',data);
}

main();

console.log('TEST')