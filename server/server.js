/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 // Get dependencies
const express = require('express');
const path = require('path');
const config = require('./config/config.json');
const bodyParser = require('body-parser');


const app = express();

// Parsers for POST json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('json spaces', 2);

// Point static path to dist where angular 2 compiled js reside
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
require('./routes/api')(app,config); // Get our API routes


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


const port = process.env.PORT || config.port;
// start server on the specified port and binding host
var server = app.listen(port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("Server v0.0.6 05/24/18 starting on port " + port );
});

module.exports = server;
