// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cfenv = require('cfenv');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv

const bodyParser = require('body-parser');

const app = express();

// Get our API routes
const api = require('./routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('json spaces', 2);

// Point static path to dist where angular 2 compiled js reside
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
/**
 * Get port from environment and store in Express.
 */
const port =appEnv.port || '3000';

// start server on the specified port and binding host
app.listen(port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("Server v0.0.3 starting on " + appEnv.url);
});
