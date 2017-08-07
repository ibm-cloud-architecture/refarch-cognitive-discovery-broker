// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
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


/**
 * Get port from environment and store in Express.
 */

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

const port = appEnv.port ||'6010';
// start server on the specified port and binding host
var server=app.listen(port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("Server v0.0.3 06/20/17 starting on port " + port );
});

module.exports = server;
