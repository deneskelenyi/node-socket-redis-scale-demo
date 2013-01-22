var PORT = 8090;
var port = process.argv[2] || PORT;
var serverName = process.argv[3] || "no name";

var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
var RedisStore = require('socket.io/lib/stores/redis')
  , redis  = require('socket.io/node_modules/redis')
  , pub    = redis.createClient()
  , sub    = redis.createClient()
  , client = redis.createClient();

io.set('store', new RedisStore({
  redisPub : pub
, redisSub : sub
, redisClient : client
}));




server.listen(port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('test', { content: "event local:"+serverName+":"+ port });
  socket.broadcast.emit('test', { content: "event from:"+serverName+ ":"+ port });

  socket.on('hello', function (data) {
    socket.broadcast.emit('test', { content: "hello from:"+serverName+ ":"+ port });
  });
});