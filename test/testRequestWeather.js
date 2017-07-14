/*
* Test discovery
*/

// https://github.com/request/request  is a simplified wrapper to do HTTP call
var request = require('request');


// Add a query and limit the number of results
var finalUrl = "http://localhost:6010/api/weather/query";


request.post({
    url:finalUrl,
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    body:"query="+"how to protect against huricane?"
  },
  function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('respon:', JSON.stringify(response,null,2)); // Print json answer.
      console.log('body:', body); // Print json answer.
    }
);
