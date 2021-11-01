1. NodeJS is found in Microservices and APIs.
2. NodeJS is for Serverless Functions in the Cloud
3. Used in Command Line Apps (Webpack, Gulp, ESLint, Yeoman)
4. Apps built on Electron (Skype, Github Desktop, Hyper, Slack, Atom, VS Code)
5. NodeJS gets excuted in browser (V8 Engine for JS)
6. libuv for Async code
7. REPL : Read , Evaluate, Print, loop

8. [Command_Prompt]:
C:\Users\sohail khan>node
Welcome to Node.js v14.18.1.
Type ".help" for more information.
> var name = 'mark'
undefined
> name
'mark'
> function Add(){
... return 87;
... }
undefined
> Add()
87

9. [Http_Verbs]
Get: pull data from db
Post: Insert data into db
Put: Update the data in db
Delete: Delete the data from db

[Example]:
[Facebook]
Initially....
- Get: Landing screen
- Post: Create a FB Post
        Create a comment on a FB Post
        Like a Post
        Sharing a Post on FB
- Put: Modify a FB Post
       Modify a comment
- Delete: Delete a FB Post
          Delete a FB Comment

Then....
[APIs] are called 
Services

From...
[Database] (Data)

10. Why Use JSON data?
APIs always deal with JSON.
Generic Datatype.
Example:
                                                function Auth(name, passcode);
                                                returns JSON 
Internal portal: Angular, React --->            {
                                                    ID
HR portal ---> .NET, C#                             FN
                                                    LN
Payroll Portal ---> Java Stack, Python              LOC
                                                    PH
                                                }

-Common understading by multiple platforms
-ease of access

*HTTP status code: 200, 404, 500, 401 

11. Express  project Creation steps:
//location ./expressproject folder

- install express generator globally
>npm install -g express-generator
>express --view=pug myapp
*if above command doesn't work then run in command prompt in that location

Output:
create : myapp\
   create : myapp\public\
   create : myapp\public\javascripts\
   create : myapp\public\images\
   create : myapp\public\stylesheets\
   create : myapp\public\stylesheets\style.css
   create : myapp\routes\
   create : myapp\routes\index.js
   create : myapp\routes\users.js
   create : myapp\views\
   create : myapp\views\error.pug
   create : myapp\views\index.pug
   create : myapp\views\layout.pug
   create : myapp\app.js
   create : myapp\package.json
   create : myapp\bin\
   create : myapp\bin\www

   change directory:
     > cd myapp

   install dependencies:
     > npm install

   run the app:
     > SET DEBUG=myapp:* & npm start

12. Redirect/Open the 'myapp' folder created in expressproject
- The coding of the project is taken further from there, refer [ReadMe.MD] of 'myapp' from now on.
