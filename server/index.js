import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const app = express()

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('join-room', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);

    socket.on('chat:message', (msg) => {
      console.log('message: ' + JSON.stringify(msg));
      io.to(room).emit('chat:message', msg);
    });
  });
})

const APP_PORT = 5555

server.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`)
})