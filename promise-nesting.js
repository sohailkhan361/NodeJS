// Promise nesting
//Another better and simplified way instead of callback nesting
const fs = require('fs').promises;

async function main() {
    const data = await fs.readFile(__filename);        // Read current File
    await fs.writeFile(__filename + '.copy', data);  // write current file

    console.log('File data to be written is :',data);
}

main();

console.log('TEST')