node-socket-redis-scale-demo
============================

Node JS + Redis + Socket.io + Express = scaling demo and test

This is a simple demo that uses a local Redis server. You need to install 

npm install socket.io
npm install express
npm install redis

To have an idea what it does, you need to run the server twice or more. 

node index.js 4444 server1
node index.js 4445 server2
node index.js 4446 server3

The fire up your favourite browser, open 2-3 windows, and access http://localhost:4444, http://localhsot:4445

... and so on. You will see connections and messages sent across instances of node, obviously through Redis.


Nore:  when running with supervisor, you need to run

supervisor -- index.js port servername

Hope this explains how this works. This project came out of frustration of spending 3 hours googling and not finding a working demo.

Cheers
Denes

