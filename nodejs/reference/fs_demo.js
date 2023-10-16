
const fs = require("fs");

const path = require("path");

// Create folder

/*
fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
    if(err) throw err;
    console.log("folder created");
});
*/

// Create and write to file

/*
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello world", function(err) {
    if(err) throw err;
    console.log("File written to");

    //file append
    fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " i love node.js", function(err) {
        if(err) throw err;
        console.log("File written to");
    });
    
});
*/

//Read file
/*
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", function(err, data) {
    if(err) throw err;
    console.log(data);
});
*/

fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloWorld.txt"), function(err, data) {
    if(err) throw err;
    console.log("File renamed");
});




