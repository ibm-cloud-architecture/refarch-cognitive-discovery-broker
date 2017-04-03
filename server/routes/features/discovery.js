const cfenv = require('cfenv');
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const extend = require('extend');
const vcapServices = require('vcap_services');
const express = require('express');
const async = require('async');

var app = express();

const router = express.Router();

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
var config = require('../env.json');

var discConfig = extend(config.discovery, vcapServices.getCredentials('discovery'));
var discovery = new DiscoveryV1({
  username: discConfig.username,
  password: discConfig.password,
  version_date: '2016-12-15'
});

router.get('/all', function(req, res) {
	discovery.query({
    environment_id: discConfig.environment_id,
    collection_id: discConfig.collection_id
  }, function(err, response) {
        if (err) {
          console.error(err);
        } else {
          res.json(response);
        }
   });
});

router.post('/company/product', function(req, res) {
	var productQuery;
	var companyQuery;
  console.log(req.body);
	if (req.body.product) productQuery = req.body.product + ",language:english";
	else  productQuery = "language:english";
	if (req.body.company) companyQuery = "blekko.urlrank>1,blekko.chrondate>1482901200,enrichedTitle.entities.text:" + req.body.company;
	else companyQuery = "blekko.urlrank>1,blekko.chrondate>1482901200"

	discovery.query({
    environment_id: discConfig.environment_id,
    collection_id: discConfig.collection_id,
    count: "5",
    query: productQuery,
    filter: companyQuery,
    return: "title,docSentiment,enrichedTitle.text,url,host,enrichedTitle.entities.text",
    aggregation: [
    "nested(enrichedTitle.entities).filter(enrichedTitle.entities.type:Company).term(enrichedTitle.entities.text)",
    "nested(enrichedTitle.entities).filter(enrichedTitle.entities.type:Person).term(enrichedTitle.entities.text)",
    "term(enrichedTitle.concepts.text)",
    "term(blekko.basedomain).term(docSentiment.type)",
    "term(docSentiment.type)",
    "min(docSentiment.score)",
    "max(docSentiment.score)",
    "filter(enrichedTitle.entities.type::Company).term(enrichedTitle.entities.text).timeslice(blekko.chrondate,1day).term(docSentiment.type)"
  ]
  }, function(err, response) {
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
          			returnJSON.push({score: result.score, url: result.url, title: result.title,sentiment:result.docSentiment.score, entities: returnEntities});
          			callback();
          		});
          	}, function(err) {
          		res.json(returnJSON);
        	});
        }
   });
});

module.exports = router;
