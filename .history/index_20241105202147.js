// server.js
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';

 const app = express();
 export const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin:'*',
    methods:['GET','POST']
  }
});

app.use(cors());

app.use(express.json());

// Handle socket connections
io.on("connection", (socket) => {
  console.log("Connection made.");

  socket.on("new_message",(message)=>{
            //broadcast this message to all this users
              socket.broadcast.emit('broadcast_message',message);
        });        
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


