import express from 'express';
import FightDB from 'fightersDatabase';

const server = express();

server.use(express.static(__dirname + '/build/'));
server.get('/', function(req, res) {
  res.sendfile('./build/index.html');
})


server.use('/db',FightDB);
server.listen();

export default server;
