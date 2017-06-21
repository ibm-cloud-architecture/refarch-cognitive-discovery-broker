
const express = require('express');
const router = express.Router();
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

router.post('/query', function(req, res) {
  const params = queryBuilder.build(req.body);
  console.log(req.body);
  console.log(params);
  discovery.query(params, function(err, response) {
    if (err) {
      console.error("Error "+err);
    } else {
      console.log("Discovery response "+response.results);
      res=response.results;
    }
  });
});

module.exports = router;
