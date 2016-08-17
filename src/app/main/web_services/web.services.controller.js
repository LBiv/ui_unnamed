(function () {
  angular
    .module('webServices')
    .controller(
      'WebServicesController',
      WebServicesController);

  WebServicesController.$inject = [
    '$http',
    'UrlService',
    'DataStorageService'];


  function WebServicesController(
    $http,
    UrlService,
    DataStorageService)
  {
    var wsc = this;

    wsc.buttons = {
      providerIdToken: providerIdButton,
      providerInfo: providerInfoButton,
      userTokenRetrieve: userTokenRetrieveButton,
      storeData: {
        store: storeDataStoreButton
      },
      loadData: {
        load: loadDataLoadButton
      }
    };

    wsc.displays = {
      providerIdToken: '',
      providerInfo: '',
      userTokenRetrieve: '',
      storeData: {
        dataId: '',
        keyslotId: ''
      },
      loadData: {
        data: '',
        keyslot: ''
      }
    };

    wsc.inputs = {
      userTokenRetrieve: '',
      storeData: {
        data: '',
        keyslot: ''
      },
      loadData: {
        dataId: '',
        keyslotIds: ''
      }
    };

    activate();  

    function storeDataStoreButton () {
      var keyslots = [];
      keyslots[0] = wsc.inputs.storeData.keyslot;
      DataStorageService.storeData(
        wsc.inputs.storeData.data,
        keyslots)
        .then(function (response) {
          console.log("response", response);
          wsc.displays.storeData.dataId = response.data.dataId;
          wsc.displays.storeData.keyslotId = response.data.keyslotIds[0];
        });
    }

    function loadDataLoadButton () {
      keyslotIds = [];
      keyslotIds[0] = wsc.inputs.loadData.keyslotIds;
      DataStorageService.loadData(
        wsc.inputs.loadData.dataId,
        keyslotIds)
        .then(function (response) {
          wsc.displays.loadData.data = response.data.data;
          wsc.displays.loadData.keyslot = response.data.keyslots[0];
        });
    }

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

    function activate() {
      console.log("controller", wsc);
    }
  }
})();

      

  
