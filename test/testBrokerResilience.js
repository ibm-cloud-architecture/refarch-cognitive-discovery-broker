/**
The goal of those tests is to validate the Broker is resilient.
*/

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var server = require('../server/server.js');
chai.use(chaiHttp);

describe('Test Resiliency', function() {
  // Starting and stopping the server for each unit test makes them order-independent
  beforeEach(function () {
    server.listen(6010);
  });

  afterEach(function () {
    server.close();
  });

  it('Load root context' , function(done){
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });

  it('')
});
