const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


mongoose.connect('mongodb://localhost:27017/chatApp', { useNewUrlParser: true, useUnifiedTopology: true });   // Connect to MongoDB


const chatSchema = new mongoose.Schema({      // Define MongoDB schemas for chat history and user details
  sender: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});         

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const Chat = mongoose.model('Chat', chatSchema);
const User = mongoose.model('User', userSchema);


io.on('connection', (socket) => {      // Socket.IO connection handling
  console.log('User connected');

  
  socket.on('message', (data) => {   // Handle incoming messages
    
    const chatEntry = new Chat({    // Save the message to MongoDB
      sender: data.sender,
      message: data.message,
    }); 
    chatEntry.save();

    
    io.emit('message', data);   // Broadcast the message to all connected clients
  }); 

  
  socket.on('userDetails', (data) => {  // Handle user details
    
    const userEntry = new User({   // Save user details to MongoDB
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    userEntry.save();
  });

  
  socket.on('disconnect', () => {   // Handle disconnection
    console.log('User disconnected');
  });
});

app.use(express.static('public'));    // Serve frontend files

const PORT = process.env.PORT || 3000; 
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
