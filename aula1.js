var http = require('http');
http.createServer(function(req, res) {
    res.end('Olá, Mundo! \n');
    res.write('Brasil 5 x 0 Servia');
}).listen(3000);