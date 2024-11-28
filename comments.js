// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a GET route for /comments
// 4. Send a response
// 5. Start the server on port 3000

// 1. Import express
const express = require('express');

// 2. Create an express app
const app = express();

// 3. Create a GET route for /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request for /comments');
});

// 4. Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 5. Send a response
// Visit http://localhost:3000/comments in your browser