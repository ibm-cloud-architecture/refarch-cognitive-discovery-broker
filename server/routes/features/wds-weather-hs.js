/*
Using the command pattern calls the external WDS service.
The Hystrix js module is used to implement circuit breaker, timeout, retries, ....
*/
var CommandsFactory = require('hystrixjs').commandFactory;
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const queryBuilder = require('./query-builder');


var run = function(config,query) {
  const discovery = new DiscoveryV1({
    username: config.weatherCollection.username,
    password: config.weatherCollection.password,
    version_date: config.weatherCollection.version_date,
    url: config.weatherCollection.url,

  });
  return new Promise(function(resolve,reject) {
        // perform the remote call
        const queryString = queryBuilder.buildForWeather(query);
        discovery.query({
          environment_id: config.weatherCollection.environment_id,
          collection_id: config.weatherCollection.collection_id,
          query: queryString
        }, function(error, response) {
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


module.exports = {
    search : function(config,req,res){
      var params = queryBuilder.buildForWeather(req.body.query);
      console.log(params);
      serviceCommand.execute(config,params)
          .then(function(response){
              console.log("in then "+JSON.stringify(response,null,2));
              res.json(response);
            })
          .catch(function(error){
              console.log("in catch "+response);
              res.status(500).send(error);
          });
    }
} //exports
