# Chat Widget Documentation
### Overview
This project was successfully completed in compliance with the specifications outlined in a hiring assignment that MindPeers specially commissioned for the Backend function. The project consists of creating a basic chat widget with the necessary frontend and backend elements. It offers a front-end and back-end chat widget implemented in a basic manner. Node.js, Express.js, Socket.IO for real-time communication, and MongoDB for user information and conversation history storage are used in the construction of the backend. A straightforward HTML page with CSS styling and JavaScript for user interaction makes up the frontend.
## Backend
#### Dependencies
1) Express.js: A web application framework for Node.js.
2) Socket.IO: A library for real-time web applications.
3) Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
#### Setting Up
1) Install dependencies:  `npm install express socket.io mongoose`
2) Connect to MongoDB by updating the connection string in app.js.
3) Define MongoDB schemas for chat history and user details.
4) Implement Socket.IO for handling real-time communication.
5) Set up an HTTP server with Express.
6) Serve frontend files (HTML, CSS, and JavaScript).
#### Socket.IO Events
* 'connection': Handles a new socket connection.
* 'message': Listens for incoming messages and broadcasts them to all connected clients.
* 'userDetails': Listens for user details and saves them to MongoDB.
#### MongoDB Models
* Chat Model: Stores sender, message, and timestamp.
* User Model: Stores user details such as name, email, and phone.

#### Running the Server
`node app.js`
## Frontend
#### HTML Structure
index.html: Main HTML file with a simple structure for the chat widget.
#### CSS Styling
styles.css: Basic styles for the chat widget.
#### JavaScript Interaction
* app.js: Handles user interactions on the frontend.
  + Opens a connection to the Socket.IO server.
  + Defines a function for sending messages.
  + Listens for incoming messages and updates the chat window.
#### Running the Frontend
Open `index.html` in a web browser.
### Usage
Open the chat widget by clicking on the small icon.
Enter your message in the input field and click "Send."
The message is sent in real-time to the server and broadcasted to all connected clients.
User details can be collected using the provided form.
