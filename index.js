/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var http = require('http');
var dt = require('./myfirstmodule');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dt.myDateTime());
    res.end('Hello World!');
  });
}).listen(8080);

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
