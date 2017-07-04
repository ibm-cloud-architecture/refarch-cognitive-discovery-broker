/*
* This test helps to understand how to integrate Hystrix as wrapper on top
of the request to WDS
*/

// https://github.com/request/request  is a simplified wrapper to do HTTP call
var request = require('request');
// Hystrix is an implementation of circuit breaker...
var CommandsFactory = require('hystrixjs').commandFactory;

// As presented in the TtestRequest test we need to set the base parameter

var environment_id="f01fc216-232b-4c6c-ba01-ec035d57f2fa";
var collection_id="935d75c2-e621-4969-be3a-4726f7c5276e";
var wdsBaseUrl="https://gateway.watsonplatform.net/discovery/api/v1/environments/"
+environment_id
+"/collections/"+collection_id+"/query?version=2017-06-25";

// Add a query and limit the number of results
var finalUrl = wdsBaseUrl;
// control the number of answer returned
finalUrl+="&count=3";
// control the content of each result
finalUrl+="&return=concepts,entities,text";


// This is where is becomes interesting:
// We need a function that will be called on the command, and that returns a promise. This
// wrapps to call to the WDS API via request
var run = function(query) {
  return new Promise(function(resolve,reject) {
        // perform the remote call
        request(finalUrl+"&natural_language_query="+query,
                {
                  'auth': {
                    "user": "7c19e67b-6c1f-4859-831a-8754eee94c5b",
                    "pass": "kde3A3EUfDnA",
                    'sendImmediately': false
                  }
                },
                function (error, response, body) {
                    // return the two predefined promise call back
                    if (error) return reject(error);
                    resolve(body);
                 }
          );// request
    }); // Promise
} //run

// now define the command with hystrix configuration / settings done via API
var command = CommandsFactory.getOrCreate("WDSOnNews")
  .circuitBreakerErrorThresholdPercentage(.1)
  .timeout(2000)
  .run(run)
  .build();


// Now call perform the query and manage the promise response
command.execute("IBM and hybrid integration")
        .then(function(rep) {
          console.log(rep);
        })
        .catch(function(err) {
          console.log(err);
        });
