const http = require('http');

http.createServer((req, res) => {
     res.writeHead(200, {'Content-Type': 'application/json'});
     res.write(JSON.stringify({name:'Vasya'}));
     res.end();
}).listen(8888);