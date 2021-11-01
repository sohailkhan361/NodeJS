var express = require('express');
var router = express.Router();

/* GET home page. */
//Creation of APIs here
//res.render is to render something on client
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//To send the response for GET request
router.get('/', function(req, res) {
  res.send('Got a GET Request');
});

//To send the response for PUT request
router.put('/', function(req, res) {
  res.send('Got a PUT Request');
});

//To send the response for POST request
router.post('/', function(req, res) {
  res.send('Got a POST Request');
});

//To send the response for DELETE request
router.delete('/', function(req, res) {
  res.send('Got a DELETE Request');
});

module.exports = router;
