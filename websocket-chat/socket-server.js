var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {

  if (req.url == '/files/phones.json') {
    // искусственная задержка для наглядности
    setTimeout(function() {
      file.serve(req, res);
    }, 2000);
  } 

  if (req.url == '/uploads') {
      var length = 0;
      req.on('data', function(chunk) {
        // ничего не делаем с приходящими данными, просто считываем
        length += chunk.length;
        if (length > 50 * 1024 * 1024) {
          res.statusCode = 413;
          res.end("File too big");
        }
      }).on('end', function() {
        res.end('ok');
      });
    } 

  else {
    file.serve(req, res);
  }

}


// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}

console.log('Server is running on port 8080');








var WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);

    for (var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });

});