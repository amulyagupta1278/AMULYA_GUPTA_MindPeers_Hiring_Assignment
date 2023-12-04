
document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    
    window.sendMessage = () => {     // Function to send a message
      const messageInput = document.getElementById('message-input');
      const message = messageInput.value.trim();
  
      if (message !== '') {
        const data = {
          sender: 'user', // Assuming the sender is the user for simplicity
          message: message,
        };
  
        
        socket.emit('message', data);  // Emit a 'message' event to the server
  
        
        messageInput.value = '';   // Clear the input field
      }
    };

    window.toggleChatPopup = () => {
        const chatPopup = document.getElementById('chat-popup');
        chatPopup.style.display = chatPopup.style.display === 'none' ? 'block' : 'none';
      };
  
    
    socket.on('message', (data) => {    // Event listener for incoming messages
      const chatMessages = document.getElementById('chat-messages');
      const messageDiv = document.createElement('div');
      messageDiv.textContent = `${data.sender}: ${data.message}`;
      chatMessages.appendChild(messageDiv);
    });
  });
  