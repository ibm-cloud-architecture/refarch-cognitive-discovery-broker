
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const async = require('async');
const queryBuilder = require('./query-builder');

module.exports = {
  search : function(config,req,res){

    const discovery = new DiscoveryV1({
      username: config.discovery.username,
      password: config.discovery.password,
      version: config.discovery.version_date,
      url: config.discovery.url,
      qs: { aggregation: `[${queryBuilder.aggregations.join(',')}]` },
    });
    console.log(req.body);
    const queryString = queryBuilder.buildForNews(req.body);
    discovery.query({
      environment_id: config.discovery.environment_id,
      collection_id: config.discovery.collection_id,
      query: queryString
    }, function(err, response) {
      if (err) {
        console.error("Error " + err);
      } else {
        var returnJSON = [];
        console.log("Discovery response "+ JSON.stringify(response.results[0],null,3));
        async.forEach(response.results, function(result, callback) {
            returnEntities = [];
          	async.forEach(result.enriched_title.entities, function(entity, callback) {
          		returnEntities.push(entity.text);
        			callback();
        		}, function(err) {
              // data mapping to target UI data model
        			returnJSON.push({
                score: result.result_metadata.score,
                url: result.url,
                title: result.title,
                entities: returnEntities
              });
              callback();
            });
          }, function(err) {
            res.json(returnJSON);
        });
      }
    });
  }
};
