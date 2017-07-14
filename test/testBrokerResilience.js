/**
The goal of those tests is to validate the Broker is resilient.
*/

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();
var server = require('../server/server.js');
chai.use(chaiHttp);

describe('Test Resiliency', function() {
  beforeEach(function () {
    server.listen(8000);
  });

  afterEach(function () {
    server.close();
  });

  it('Test Weather Call: How to protect against huricane',function() {
    this.timeout(4000);
    chai.request(server)
    .post('/api/weather/query',"How to protect against huricane?")
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      res.body.should.be.a('array');
      done();
    });

   });
});
