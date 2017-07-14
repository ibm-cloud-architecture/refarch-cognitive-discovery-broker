/*
Using the command pattern calls the external WDS service.
The Hystrix js module is used to 
*/
var CommandsFactory = require('hystrixjs').commandFactory;
const config = require('../env.json');
const express = require('express');
const router = express.Router();
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const queryBuilder = require('./query-builder');

const discovery = new DiscoveryV1({
  username: config.weatherCollection.username,
  password: config.weatherCollection.password,
  version_date: config.weatherCollection.version_date,
  path: {
    environment_id: config.weatherCollection.environment_id,
    collection_id: config.weatherCollection.collection_id
  }
});
var run = function(query) {
  return new Promise(function(resolve,reject) {
        // perform the remote call
        const params = queryBuilder.buildForWeather(query);
        discovery.query(params, function(error, response) {
                    //console.log("In run query "+JSON.stringify(error,null,2)+" "+JSON.stringify(response,null,2));
                    if (error) {
                      return reject(error);
                    }
                    return resolve(response.results);
                 }
          );// query request
    }); // Promise
} //run
var serviceCommand =CommandsFactory.getOrCreate("WDSOnWeather")
  .run(run)
  .timeout(5000)
  .requestVolumeRejectionThreshold(2)
  .build();

router.post('/query', function(req, res) {
    console.log(req.body);
  var params = queryBuilder.buildForWeather(req.body.query);
  console.log(params);
  serviceCommand.execute(params).then(function(response){
    console.log("in then "+JSON.stringify(response,null,2));
    res.json(response);
  }).catch(function(error){
    console.log("in catch "+response);
    res.status(500).send(error);
  });
});

module.exports = router;
