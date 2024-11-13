// server.js
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
 const app = express();
app.use(cors());

// 1. Creating server using http.
export const server = http.createServer(app);
// 2. Create socket server.
const io = new Server(server,{
    cors:{
        origin:'*',
        methods:["GET", "POST"]
    }
});

// 3. Use socket events.

io.on('connection', (socket)=>{
    console.log("Connection is established");
socket.on("join",(data)=>{
  socket.username = data;
})

    socket.on('new_message', (message)=>{
        const username = {
          username: socket.username,
          message:message,
        }
          
      // broadcast this message to all the clients.
        socket.broadcast.emit('broadcast_message', username);
    })

    socket.on('disconnect', ()=>{
        console.log("Connection is disconnected");
    })
});


