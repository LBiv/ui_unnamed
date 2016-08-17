angular
  .module('unnamedServices')
  .service(
    'DataStorageService',
    DataStorageService);

function DataStorageService(
  $http,
  UrlService)
{
  var _domainPort = 'http://localhost:8080';

  this.storeData = storeData;
  this.loadData = loadData;

// TODO verification for data and keyslots
  function storeData (data, keyslots) {

    var toSend = {
      data: data,
      keyslots: keyslots
    } 

    return $http
      .post(
        UrlService.dataStorage.store,
        toSend);
  }

  function loadData (dataSpecifier, userSpecifiers) {
    
    var toSend = {
      dataId: dataSpecifier,
      keyslotIds: userSpecifiers
    }

    return $http
      .post(
        UrlService.dataStorage.load,
        toSend);
  }

}
