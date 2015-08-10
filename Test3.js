var http = require('http')

http.get("http://www.google.com/index.html" , function(resp,body){
  console.log(resp.statusCode);
  console.log(); 
})
