// Node.js built-in module: File System  
// File System module enables Node.js, to read files asynchronously and 
// executes callback function when read operation completes. 
// This read operation either throws an error or completes successfully.

var fs = require("fs");


// ==================================================================================
// READ
// ==================================================================================
// Asynchronous read
// ------------------
// Asynchronous functions do not block the execution other commands in a program 
fs.readFile('E:/code/CODING_NodeJS/data.txt', function (err, data) {
                    if (err) throw err;

    console.log(data.toString());
});

// Synchronous read
// ------------------
// Synchronous functions block the execution of other commands
// until the file operation is completed.
// Synchronous functions are blocking functions.
var data = fs.readFileSync('E:/code/CODING_NodeJS/data.txt');
console.log(data.toString());

// ==================================================================================
// WRITE
// ==================================================================================


// ==================================================================================
// APPEND
// ==================================================================================


// ==================================================================================
// DELETE
// ==================================================================================
