const express = require('express');
const app = express();

// Import your route definitions
const apiRoutes = require('./routes/api');
app.use(express.json());

// Use the routes in your application
app.use('/api', apiRoutes);


// Start your Express.js server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


