var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    
    
  fs.readFile('HTMLPage.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
    
    
    //res.end('Hello, world!');
    
}).listen(process.env.PORT || 8080);