
const express = require('express');
const router = express.Router();
const config = require('../env.json');
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

router.post('/weather', function(req, res) {
});

module.exports = router;
