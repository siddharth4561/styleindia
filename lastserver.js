// create the node.js file that read the html file and return the content


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('frame.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
