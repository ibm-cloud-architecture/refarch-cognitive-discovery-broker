
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
  const params = queryBuilder.buildForWeather(req.body.query);
  console.log(params);
  discovery.query(params, function(err, response) {
    if (err) {
      console.error("Error "+err);

    } else {
    //  console.log("Discovery response "+JSON.stringify(response, null, 2));
      res.json(response.results);
    }
  });
});


router.get('/mockup',function(req,res) {
  console.log("Mockup called");
  var fs = require('fs');
  var response = JSON.parse(fs.readFileSync('server/routes/features/rep.json', 'utf8'));
  res.send(response.results);
});

module.exports = router;
