import express from 'express';
const server = express();

server.use(express.static(__dirname + '/build/'));
server.get('/', function(req, res) {
  res.sendfile('./build/index.html');
})

export default server;
