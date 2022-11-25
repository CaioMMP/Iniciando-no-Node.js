var http = require('http');
var dia = require('./biblioteca');
http.createServer(function(req, res) {
    res.end('Olá, Mundo! \n');
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h2>Brasil 2 x 0 Servia</h2> \n');
    res.write('<p style = color: green;>' + Date().substring(16, 24) + '<br>');
    res.write(dia.diaDaSemana() + '</p><br>')
}).listen(3000);