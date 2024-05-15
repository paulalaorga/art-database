// Require necessary modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Configuration for the port to allow environment to set the port, with a default of 3000
const port = process.env.PORT || 3000;

// Middleware to enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// A GET route that returns a JSON object with an empty TimeLine array
app.get('/public/data.json', (req, res) => {
    res.json({ TimeLine: [] });
});

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server and log a message to the console
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
