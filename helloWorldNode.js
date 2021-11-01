//CREATING A SERVER IN NODEJS
//Step: 1

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Abhishek \n');
});

server.listen( 4242, () => {
    console.log('Server is running...');
});

