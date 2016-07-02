(function () {
  angular
    .module('login')
    .controller(
      'LoginController',
      LoginController);

  LoginController.$inject = [
    '$http',
    'AuthService',
    'SessionService',
    'UrlService'];
  
  function LoginController(
    $http,
    AuthService,
    SessionService,
    UrlService)
  {
    var lc = this;

    lc.buttons = {
      signIn: signInButton
    };

    lc.inputs = {
      username: '',
      password: ''
    };

    function signInButton() {
      $http
        .post(
          UrlService.userLogin,
          AuthService.createLoginToken(lc.inputs.username, lc.inputs.password)
        )
        .then(
          function (response) {
            SessionService.setToken(response.data);
          },
          function (error) {
            console.log("Login");
            console.log(error);
          }
        );
    }
  }
})();

      

  
