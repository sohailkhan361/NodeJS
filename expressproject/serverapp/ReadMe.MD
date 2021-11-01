Creating a new Node Project:
1. Initialize
> npm init -y

2. Add dependencies
> npm install express 
> npm install cors
- OR
>npm install cors express 

[CORS]
- Allow Cross Domain Resource Sharing
- Cross Origin Resource Sharing
- White-listing a website
- Allowed to execute the specified methods on the APIs we have

3. `Creating the API here` 
- book-api.js file
- To run
> node .\book-api.js

4. [GET]:
- Set: GET
- Type URL
- Send request

5. [POST]:
In postman:
- Set: POST
- Type in the URL
- Body --> Raw --> JSON
- Type in the data {} in body and Send request 

6. [PUT]:
- Set: PUT
- Type URL , with the id or number using which you will find the value to update
- Body --> Raw --> JSON
- Write the edited value {} in body and Send request

7. [DELETE]:
- Set: DELETE
- Type URL , with the id or number using which you will find the value to delete
- Send request

8. HomeWork/Task:
`Build an API for products`:
- Methods : `GET, PUT, POST, DELETE`
- {
    ProductID:
    ProductName:
    ManuDate:
    ExpDate:
    Price:
}

Follow the steps:
- npm init -y
- npm i cors express
- configure your file with HTTP verbs
- Test it on Postman
