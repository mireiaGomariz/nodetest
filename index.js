const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Welcome to Express');
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
