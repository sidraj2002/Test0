var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200);
  response.write("HEllo")
});

server.listen(8000);
