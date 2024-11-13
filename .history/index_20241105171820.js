// server.js
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import Task from './task.schema.js';

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

  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


