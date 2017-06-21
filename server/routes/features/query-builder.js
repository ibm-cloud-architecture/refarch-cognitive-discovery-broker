// Aggregations used to build the different parts of the UI

const entities = [
  'nested(enrichedTitle.entities).filter(enrichedTitle.entities.type:Company).term(enrichedTitle.entities.text)',
  'nested(enrichedTitle.entities).filter(enrichedTitle.entities.type:Person).term(enrichedTitle.entities.text)',
  'term(enrichedTitle.concepts.text)',
];

const sentiments = [
  'term(blekko.basedomain).term(docSentiment.type)',
  'term(docSentiment.type)',
  'min(docSentiment.score)',
  'max(docSentiment.score)',
];

const mentions = [
  // eslint-disable-next-line
  'filter(enrichedTitle.entities.type::Company).term(enrichedTitle.entities.text).timeslice(blekko.chrondate,1day).term(docSentiment.type)'
];

module.exports = {
  aggregations: [].concat(entities, sentiments, mentions),
  entities,
  sentiments,
  mentions,
  buildForNews(query, full) {
    var productQuery;
    var companyQuery;
    //Creates date two weeks ago for query usage
    var queryTime = new Date;
    queryTime = Math.floor(queryTime.getTime()/1000) - 1209600;
    if (query.product) productQuery = query.product + ",language:english";
    else  productQuery = "language:english";

    const params = {
      count: 5,
      return: 'title,docSentiment,enrichedTitle.text,url,host,enrichedTitle.entities.text',
      query: productQuery,
      aggregations: [].concat(entities, sentiments, mentions),
      filter: companyQuery
    };
    if (query.company) {
      params.filter = 'blekko.hostrank>20,blekko.chrondate>' + queryTime + ',enrichedTitle.entities.text:' + query.company;
    }
    else {
      params.filter = 'blekko.hostrank>20,blekko.chrondate>' + queryTime;
    }
    return params;
  },
  /**
  For weather the query is the question
  */
  buildForWeather(userQuestion){
    const params = {
      count: 5,
      return: 'title,enrichedTitle.text,url,host,enrichedTitle.entities.text',
      query: userQuestion,
      aggregations: [].concat(entities, sentiments, mentions)
    };
  }
};
