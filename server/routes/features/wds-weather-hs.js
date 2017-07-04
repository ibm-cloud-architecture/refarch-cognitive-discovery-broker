/*
Using the command pattern calls the external WDS service.
*/
var CommandsFactory = require('hystrixjs').commandFactory;
const config = require('../env.json');
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
                    if (error) {
                      console.log(error);
                      return reject(error);
                    }
                    console.log(response.status);
                    resolve(response.results);
                 }
          );// query request
    }); // Promise
} //run


module.exports = CommandsFactory.getOrCreate("WDSOnWeather")
  .run(run)
  .timeout(3000)
  .requestVolumeRejectionThreshold(2)
  .build();
