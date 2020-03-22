const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});

app.get('/', (request, response) => {
  response.send('Welcome');
});

app.get(`/api/movies`, (request, response) => {
  response.send('Welcome to Express');
});

app.get(`/api/movies:id`, (request, response) => {
  response.json;
});

app.get(`/api/employee`, (request, response) => {
  response.sendStatus(304);
});


app.get(`/api/employee?name=Mireia`, (request, response) => {
  response.status(404).send('Here you have the String');

});
