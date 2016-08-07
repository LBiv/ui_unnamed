(function () {
  angular
    .module('webServices')
    .controller(
      'WebServicesController',
      WebServicesController);

  WebServicesController.$inject = [
    '$http',
    'UrlService'];
  

  function WebServicesController(
    $http,
    UrlService)
  {
    var wsc = this;

    wsc.buttons = {
      providerIdToken: providerIdButton,
      providerInfo: providerInfoButton,
      userTokenRetrieve: userTokenRetrieveButton
    };

    wsc.displays = {
      providerIdToken: '',
      providerInfo: '',
      userTokenRetrieve: ''
    };

    wsc.inputs = {
      userTokenRetrieve: ''
    };


    function providerIdButton () {
      $http
        .get(UrlService.providerId)
        .then(function(response) {
          console.log(response);
          wsc.displays.providerIdToken = response.data;
        });
    } 

    function providerInfoButton () {
      $http
        .get(UrlService.providerInfo)
        .then(function(response) {
          console.log(response);
          wsc.displays.providerInfo = response.data;
        });
    } 

    function userTokenRetrieveButton () {
      $http
        .post(
          UrlService.userTokenRetrieve,
          {"UserIdentifier": wsc.inputs.userTokenRetrieve})
        .then(
          function(response) {
            console.log(response);
            wsc.displays.userTokenRetrieve = response.data.UserToken;
          },
          function(error) {
            console.log(error);
          });

    }
  }
})();

      

  
