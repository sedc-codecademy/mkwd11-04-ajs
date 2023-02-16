# Node.js and NPM 🍓

## Node.js

JavaScript is one of the most used languages in the world. This is because the internet is a huge part of our lives and every page is built with JavaScript. In 2009, person Ryan Dahl decided to take the V8 engine that google chrome uses to work with JavaScript and in combination with C++ created the first version of node.js. Node.js is nothing more than a run-time environment that executes JavaScript but on a server and with server-like capabilities. This means that JavaScript from that point forward can be used for building dynamic web pages but also create the back-end of the application with JavaScript as well. We can now host an application with JavaScript, and make AJAX calls to it with JavaScript from the page as well

#### Installation

Before we can start using it we need to install it on our machine

1. Check if we already have Node.js - open CMD or PowerShell and type: node -v
2. If we see a version number, this means that we already have node.js on our machine
3. If not we go to the node.js download page
4. Download the LTS ( Long Term Support ) version of node. 
5. Install node.js from the installer
6. Check in CMD or PowerShell again if node.js is installed by typing: node -v

#### JavaScript in the console

Now that we have node.js we can execute JavaScript not only in the browser but on our machine as well. This means that we can execute code in an engine installed on our machine. We can execute this code simply by opening any command line and just write node. We are going to use the visual studio code console because it is easy to use and we can also execute scripts from it without needing to switch to different windows later

1. Open VS Code
2. Click the 'Terminal' tab
3. Click 'New Terminal'
4. Write 'node' in the terminal
5. You can now execute JavaScript in the console

#### Useful commands while working in windows console

* **dir** - what is inside the current directory
* **cd** - traversing trough the folder structure
* **cd folderName** - enters a folder
* **cd ..** - goes back one folder ( to the parent )
* **cd ..\..** - goes back 2 times
* **cd folderName\anotherFolder** - goes inside one folder and then into another
* **cls** - clears the console

#### Executing scripts in console

We can also create a script and run it in the console. Since we can run code in the console we can also run a script that will completely execute in the console. We do that by:

1. Create a .js file and write some code in it
2. Open the console
3. Write node myScript.js ( with your name of the script )

#### Working with modules

Modules are an essential part of node.js. They are basically other scripts that we can include and combine to get full implementation of our application. We import modules in a script by writing **require()** and the name of the script inside of it or path if it is in a folder structure ( name only, no extension ). When we want to export something from a script we write **module.exports =** and write what we want to export. Whatever we export, we will get as a result of the require from our script

##### app.js

```javascript
const say = require('./say');

console.log(say.hello("Billy"));
console.log(say.bye("Billy"));
``` 

##### say.js

```javascript
function hello(name){
    return "Hey there " + name;
}
function bye(name){
    return "Goodbye there " + name;
}
// module.exports = hello; // only export hello
// module.exports = bye; // only export bye
module.exports = {bye: bye, hello: hello}; // export both in an object
``` 

#### Working with file system

Because we are running JavaScript on our machine we can do things that we couldn't do in the browser like manipulating the file system. This is impossible with browsers because browsers restrict access to the file system for safety and security reasons.  We can create a new txt file so we can write in it

##### app.js

```javascript
const txtService = require('./txtService');

txtService.addText("Hello");
txtService.appendText("\nThis is in a new line!");
console.log(txtService.readText());
``` 

##### txtService.js

```javascript
const fs = require('fs');
let file = "test.txt";
module.exports = {
    addText: function(text){
        fs.writeFileSync(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    appendText: function(text){
        fs.appendFileSync(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    readText: function(){
        return fs.readFileSync(file, {encoding: 'utf-8'});
    }
}
```

#### Example with import/export

##### app.js

```javascript
import { textService } from "./txtService.js";

txtService.addText("Hello");
txtService.appendText("\nThis is in a new line!");
console.log(txtService.readText());
``` 

##### txtService.js

```javascript
import * as fs from 'fs';
export { textService };

let file = "test.txt";
let textService = {
    addText: function(text){
        fs.writeFileSync(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    appendText: function(text){
        fs.appendFileSync(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    readText: function(){
        return fs.readFileSync(file, {encoding: 'utf-8'});
    }
}
```

## Package Management

Package management is a really important part of the JavaScript community. The need for package management grew as the language climbed the top as the most used language in the world. With this came a huge number of libraries for everything and anything. It gets even harder when we factor in the dependencies of all these libraries ( libraries that depend on other libraries ) such as bootstrap depending on jquery and popper. To organize and standardize everything to some extend package managers were created. Their job is to keep track of packages, their versions, and dependencies. When we need a package we can just request it from the package manager and it will download it with all of its dependencies and in the correct versions that the library works with. This can cut our time downloading libraries and reading the documentation on how to connect and set up everything by a huge margin. We just write one or two commands and we have a library all ready to go

## NPM

One of the most famous and widely accepted package managers is the node package manager. This package manager can be installed if you already have node.js installed on your computer and it's very easy to use

### Ways we can install packages

* Local - Packages that are local to the folder that you are working in
* Global - Packages that are installed on the machine and are accessible throughout all files and folders
* Release - A package that will be installed for the release version of the product
* Development  - A package that is only needed in the development phase of the application

### Installation

Installation is very quick. We just open the console and write: **npm install npm -g**. After everything is installed write **npm -v** in the console. If a version pops up, this means that we successfully installed npm
 
### Commands
* npm init - create a package.json for your project
* npm ls - lists installed packages
* npm install - Looks in the folder for dependencies configuration and if it finds any, downloads and installs all packages and dependencies
* npm install PackageName - installs package locally in the folder you are in and is a release package
* npm install PackageName -g -installs package globally to your file system
* npm install PackageName --save-dev - installs a package only needed for the development phase
* npm install PackageName --no-save - Installs package only for this folder and this machine only ( Will not be stored in dependencies )
* npm install PackageName@1.8.2 - install a package with a certain version
* npm install --only=prod - installs packages only for production
* npm outdated - checks for outdated packages
* npm update PackageName - updates package
* npm uninstall PackageName - removes a package from the project
 
#### Configuration

We can see all our dependencies in the package.json file. The package.json file is the main hub for tracking which packages we installed and what we can use. This configuration file can be configured in different ways depending on our needs

* ^ - indicates installing of a compatible version with the added version
* ~ - indicates installing of a similar version to the added version
* \* - indicates installing any version 
* \< - indicates installing a greater version of the added version

## Extra materials 📘
* [A guide to NPM](https://www.sitepoint.com/beginners-guide-node-package-manager/)
* [Introduction to Node.js](https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219)
* [Read/Write in node.js](https://blog.risingstack.com/mastering-the-nodejs-core-modules-file-system-fs-module/)
