Steps for node project: 
1. npm init -y 
it will create package.json file, containing project 
2. >npm i express 
installing express dependency 
Will give: 
package.lock.json - will give versions, informations of all dependencies module 
node_modules - all modules downloaded from internet 
3. If we commit 'package.json' and execute >npm i 
- It will give dependencies irrespective of the versions (another person will get the latest versions with those deps) 
example: node2 folder

But if we commit both 'package.json' and 'package-lock.json' and then run >npm i 
- then it will lock all the dependencies(mentioned in package.json) along with all the versions specified in packge-lock.json file. 
example: node3 folder

4. nodejs.org/dist/latest-v16.x/docs/api/fs.html
- we have all sync and async methods



