angular
  .module('unnamedServices')
  .service(
    'UrlService',
    function () {
      var _domainPort = 'http://localhost:8080';

      this.providerId = _domainPort + '/id/';
      this.providerInfo = _domainPort + '/info/';
      this.userLogin = _domainPort + '/login/';
      this.userTokenRetrieve = _domainPort + '/userToken/';
    });
