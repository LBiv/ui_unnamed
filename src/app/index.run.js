(function() {
  'use strict';

  angular
    .module('uiUnnamed')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
