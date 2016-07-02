angular
  .module('unnamedServices')
  .service(
    'AuthService',
    function () {

      this.loginValid = loginValid;
      this.createLoginToken = createLoginToken;

      function createLoginToken(username, password) {
        return {
          username: username,
          password: password
        }
      }

      function loginValid(responseToken) {
        return response !== "";
      }

    });
