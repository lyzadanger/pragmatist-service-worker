'use strict';

// Third Party Dependencies
const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname));
app.use('/vendor', express.static(__dirname + '/node_modules/'));

// Start the HTTP Server
const port = process.env.PORT || 4000;
const server = new Promise(resolve => {
  http.listen(port, () => {
    resolve();
  });
});

server.then(() => {
  console.log(`You can access examples in a browser: http://localhost:${port}`);
});
