/**
This is a simple example of how to call directly Watson Discovery for the Weather collection
from a javascript script executable with nodejs
*/
// the env.json has the discovery credentials
const config = require('../server/routes/env.json');
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

const discovery = new DiscoveryV1({
  username: config.weatherCollection.username,
  password: config.weatherCollection.password,
  version_date: config.weatherCollection.version_date,
  path: {
    environment_id: config.weatherCollection.environment_id,
    collection_id: config.weatherCollection.collection_id
  }
});

/*
discovery.getEnvironments(null, function(error, data) {
  console.log(JSON.stringify(data, null, 2));
});
*/

const params = {
  count: 5,
  //return: 'title,text,enriched_txt.entities',
  passages: true,
  natural_language_query: "How do I prepare for the hurricane?",
  //aggregations: [].concat(entities, sentiments, mentions)
};

discovery.query(params, function(err, data) {
  if (err) {
    console.error("Error "+err);

  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
