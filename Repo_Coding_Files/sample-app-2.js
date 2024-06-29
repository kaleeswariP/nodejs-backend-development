const express = require('express');
const path = require('path');
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

app.put('/update', (req, res) => {
  res.send('Update Received');
});

app.delete('/delete', (req, res) => {
  res.send('Delete Request Received');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
