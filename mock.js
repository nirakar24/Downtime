const express = require('express');
const app = express();

// Define a route that always returns a 200 OK response
app.get('/health', (req, res) => {
  res.status(200).send('Server is up and running');
});

// Define a route to simulate downtime (returns a 503 Service Unavailable response)
app.get('/simulate-downtime', (req, res) => {
  res.status(503).send('Service is temporarily unavailable');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mock server listening on port ${port}`);
});
