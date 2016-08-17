angular
  .module('unnamedServices')
  .service(
    'UrlService',
    UrlService);

function UrlService() {
  var _domainPort = 'http://localhost:8080';

  this.providerId = _domainPort + '/id/';
  this.providerInfo = _domainPort + '/info/';
  this.userLogin = _domainPort + '/login/';
  this.userTokenRetrieve = _domainPort + '/userToken/';
  this.dataStorage = {
    store: _domainPort + '/storeData/',
    load: _domainPort + '/loadData'
  }
}
