(function() {
  'use strict';

  angular
    .module('uiUnnamed')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
/**      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
**/
      .state('web', {
        url: '/web/',
        templateUrl: 'app/main/web_services/web-services.html',
        controller: 'WebServicesController',
        controllerAs: 'wsc'
      })
      .state('login', {
        url: '/login/',
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginController',
        controllerAs: 'lc'
      });
        
    $urlRouterProvider.otherwise('/login/');
  }

})();
