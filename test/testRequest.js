/*
* This test helps to understand how to use http request to call Watson Discovery
* This is a back to the basic, but it may be helpful to do it
*/

// https://github.com/request/request  is a simplified wrapper to do HTTP call
var request = require('request');

// As presented in the Tutorial WDS has a lot of API. So let do a query on Currated News collection
// For that you need the WDS environment_id and collection_id for the news.
// and then the Bluemix service credentials

var environment_id="f01fc216-232b-4c6c-ba01-ec035d57f2fa";
var collection_id="935d75c2-e621-4969-be3a-4726f7c5276e";
var wdsBaseUrl="https://gateway.watsonplatform.net/discovery/api/v1/environments/"
+environment_id
+"/collections/"+collection_id+"/query?version=2017-06-25";

// Add a query and limit the number of results
var finalUrl = wdsBaseUrl+"&natural_language_query='explain me the IBM cloud strategy'";
// control the number of answer returned
finalUrl+="&count=3";
// control the content of each result
finalUrl+="&return=concepts,entities,text";

request(finalUrl,
  {
    'auth': {
      "user": "7c19e67b-6c1f-4859-831a-8754eee94c5b",
      "pass": "kde3A3EUfDnA",
      'sendImmediately': false
    }
  },
  function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print json answer.
    }
);
