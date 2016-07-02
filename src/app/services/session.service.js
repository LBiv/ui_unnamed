angular
  .module('unnamedServices')
  .service(
    'SessionService',
    function () {
      var _sessionToken;

      this.setToken = setToken;
      this.getToken = getToken;

      function setToken(token) {
        _sessionToken = token;
      }

      function getToken() {
        return _sessionToken;
      }

    });
