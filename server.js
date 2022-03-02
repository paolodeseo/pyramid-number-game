const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);  

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });

  server.listen(3000, function() {
    console.log('listening on *:3000');
  });

//server
io.on('connection', function(socket) {
    
    socket.emit('connected')
    socket.on('move', function(msg){
        socket.broadcast.emit('move', msg)
    })

})