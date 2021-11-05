const express = require("express");
const cors = require("cors");

const app = express()

const port = 4400

//GET POST PUT DELETE 
let accounts = [{
    "AccountID" : "50001",
    "CustomerName" : "Abhishek",
    "Balance" : "1200000",
    "custAddress" : "Haryana",
    "custPhone" : "9123568912",
},{
    "AccountID" : "50002",
    "CustomerName" : "Sahil",
    "Balance" : "20000",
    "custAddress" : "Delhi",
    "custPhone" : "1102656859",
},{
    "AccountID" : "50003",
    "CustomerName" : "Samrat",
    "Balance" : "50000000",
    "custAddress" : "Dublin",
    "custPhone" : "1100454545",
},{
    "AccountID" : "50004",
    "CustomerName" : "Panchhi",
    "Balance" : "540000000",
    "custAddress" : "West Bengal",
    "custPhone" : "9125425478",
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

app.get("/accounts", (req, res) => {
    res.json(accounts);
})

//----------------------------------------------------
//Executing all the HTTP verbs

//[GET]
app.get('/accounts/:AccountID', (req, res) => {

    //reading AccountID from the URL
    const AccountID = req.params.AccountID;

    //searching accounts for the AccountID
    for( let Account of accounts ) {
        if (Account.AccountID === AccountID) {
            res.json(Account);
            return;
        }
    }

    //sending 404 when not found something : it is a good practice
    res.status(404).send('Account not Found!');
})

//[POST]
app.post('/accounts', (req, res) => {
    //fetching data from the request
    const Account = req.body;
    
    //pushing in API
    accounts.push(Account);

    res.send('User Account has been added to the DataBase now');
})

app.get('/accounts', (req, res) => {
    res.json(accounts);
})

//[PUT]
app.put('/accounts/:AccountID', (req, res) => {
    //reading AccountID from the URL
    const AccountID = req.params.AccountID;
    const newAccount = req.body;

    //remove item from the accounts array
    for (let i = 0; i<accounts.length; i++) {
        let Account = accounts[i];

        if(Account.AccountID === AccountID) {
            accounts[i] = newAccount
        }
    }

    //sending the status code 404 when not found 
    res.send('Account is edited/updated');
})

//[DELETE]
app.delete('/accounts/:AccountID', (req, res) => {
    //reading AccountID from the URL
    const AccountID = req.params.AccountID;

    //remove AccountID from the accounts array
    // use any method filter(), splice(), looping method
    accounts = accounts.filter( p => {
        if (p.AccountID !== AccountID) {
            return true                     //select all the unmatched values and filters them out
        }
        else 
            return false                    //doesn't copy or skips the value matched (indirectly delete)
    }) 
    
    //sending  404 when not found is a good practice
    res.send('Account has been successfully removed from database!')
})


app.listen(port, () => console.log(`Bank Application listening on port ${port}`))

//To run 
// > node .\Account-api.js  