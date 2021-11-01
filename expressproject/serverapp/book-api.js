const express = require("express");
const cors = require("cors");

const app = express()

const port = 4400

//GET POST PUT DELETE -- test and say done
let books = [{
    "isbn" : "9900",
    "title" : "Eloquest JS",
    "author" : "Martin",
    "publish_date" : "2014-12-14",
    "publisher" : "No starch press",
    "numOfPages" : 472
},{
    "isbn" : "2200",
    "title" : "Learning JS Design",
    "author" : "Addy Osmani",
    "publish_date" : "2015-10-14",
    "publisher" : "penguin",
    "numOfPages" : 350 
},{
    "isbn" : "6755",
    "title" : "Speaking JS",
    "author" : "Martin",
    "publish_date" : "2019-2-8",
    "publisher" : "O'Reilly Media",
    "numOfPages" : 400
}]

var allowCrossDomain = function(req, res, next) {
    // * for allowing everyone to access and share
    res.header("Access-Control-Allow-Origin", "*");

    //Specifying the methods allowed to be performed
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    //Content-Type: application/json; charset=utf-8
    res.header("Access-Control-Allow-Header", "Content-Type");
    next();
}

app.use(cors());
app.use(allowCrossDomain);
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

app.get("/books", (req, res) => {
    res.json(books);
})

//----------------------------------------------------
//Executing all the HTTP verbs

//[GET]
app.get('/books/:isbn', (req, res) => {

    //reading isbn from the URL
    const isbn = req.params.isbn;

    //searching books for the isbn
    for( let book of books ) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    //sending 404 when not found something : it is a good practice
    res.status(404).send('Book not Found!');
})

//[POST]
app.post('/books', (req, res) => {
    //fetching data from the request
    const book = req.body;
    
    //pushing in API
    books.push(book);

    res.send('Book is now added to the DataBase/API');
})

app.get('/books', (req, res) => {
    res.json(books);
})

//[PUT]
app.put('/books/:isbn', (req, res) => {
    //reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    //remove item from the books array
    for (let i = 0; i<books.length; i++) {
        let book = books[i];

        if(book.isbn === isbn) {
            books[i] = newBook
        }
    }

    //sending the status code 404 when not found 
    res.send('Book is edited/updated');
})

//[DELETE]
app.delete('/books/:isbn', (req, res) => {
    //reading isbn from the URL
    const isbn = req.params.isbn;

    //remove isbn from the books array
    // use any method filter(), splice(), looping method
    books = books.filter( p => {
        if (p.isbn !== isbn) {
            return true                     //select all the unmatched values and filters them out
        }
        else 
            return false                    //doesn't copy or skips the value matched (indirectly delete)
    }) 
    
    //sending  404 when not found is a good practice
    res.send('Book is deleted successfully!')
})


app.listen(port, () => console.log(`Hello world app listening on port ${port}`))

//To run
// > node .\book-api.js