// Node.js built-in module: HTTP  
// HTTP module enables Node.js to transfer data over Hyper Text Transfer Protocol

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!');  // response messge
    res.end();                  
}).listen(8081);                // Server object port 8080
