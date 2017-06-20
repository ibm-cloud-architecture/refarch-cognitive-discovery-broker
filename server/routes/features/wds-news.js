
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const express = require('express');
const async = require('async');

const queryBuilder = require('./query-builder');

var app = express();
const router = express.Router();

const config = require('../env.json');

const discovery = new DiscoveryV1({
  username: config.discovery.username,
  password: config.discovery.password,
  version_date: config.discovery.version_date,
  path: {
    environment_id: config.discovery.environment_id,
    collection_id: config.discovery.collection_id
  },
  qs: { aggregation: `[${queryBuilder.aggregations.join(',')}]` },
});

router.get('/all', function(req, res) {
  discovery.query({}, function(err, response) {
        if (err) {
          console.error(err);
        } else {
          res.json(response);
        }
   });
});

router.post('/company/product', function(req, res) {
  const params = queryBuilder.build(req.body);
  discovery.query(params, function(err, response) {
    if (err) {
      console.error("Error "+err);
    } else {
      var returnJSON = [];
      console.log("Discovery response "+response.results)
      async.forEach(response.results, function(result, callback) {
        returnEntities = [];
        	async.forEach(result.enrichedTitle.entities, function(entity, callback) {
        		returnEntities.push(entity.text);
      			callback();
      		}, function(err) {
            // data mapping can be done here
      			returnJSON.push({score: result.score,
              url: result.url,
              title: result.title,
              sentiment:result.docSentiment.score, entities: returnEntities
            });
            callback();
          });
        }, function(err) {
          res.json(returnJSON);
      });
    }
  });
});

module.exports = router;
