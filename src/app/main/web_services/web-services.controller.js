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
      providerInfo: providerInfoButton
    };

    wsc.display = {
      providerIdToken: '',
      providerInfo: ''
    };


    function providerIdButton () {
      $http
        .get(UrlService.providerId)
        .then(function(response) {
          console.log(response);
          wsc.display.providerIdToken = response.data;
        });
    } 

    function providerInfoButton () {
      $http
        .get(UrlService.providerInfo)
        .then(function(response) {
          console.log(response);
          wsc.display.providerInfo = response.data;
        });
    } 
  }
})();

      

  
