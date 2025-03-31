// Import Socket.io
const socketIo = require('socket.io');

// Set up a server to listen for WebSocket connections
const io = socketIo(server);  // Make sure `server` refers to your HTTP server

// Listen for connections
io.on('connection', socket => {
  console.log('A user connected');
  
  // You can emit events to the client here
  socket.emit('message', 'Welcome to the real-time server!');
  
  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
