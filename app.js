const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Allow the port to be set by Render

app.get('/', (req, res) => {
  res.json({ message: 'Hello from my JSON API!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
