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

  it('Test Weather Call',function() {
    this.timeout(4000);
    var serviceCommand = require('../server/routes/features/wds-weather-hs');
    return serviceCommand.execute("How to protect against huricane?")
    .then(function(rep) {
          console.log(rep);
          should.exist(rep);
       }
     );
   });
});
