const cfenv = require('cfenv');
const extend = require('extend');
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const vcapServices = require('vcap_services');
const express = require('express');
const async = require('async');

const queryBuilder = require('./query-builder');

var app = express();

const router = express.Router();

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
var config = require('../env.json');

const discConfig = extend(config.discovery, vcapServices.getCredentials('discovery'));
const discovery = new DiscoveryV1({
  username: discConfig.username,
  password: discConfig.password,
  version_date: discConfig.version_date,
  path: {
    environment_id: discConfig.environment_id,
    collection_id: discConfig.collection_id
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
