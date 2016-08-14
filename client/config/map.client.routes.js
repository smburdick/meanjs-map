(function() {
  'use strict';

  angular
      .module('map.routes')
      .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      // .state('map', {
      //   abstact: true,
      //   url: '/map',
      //   template: '<ui-view/>'
      // })
      .state('map', {
        url: '/map',
        templateUrl: 'modules/map/client/views/map.client.view.html',
        controller: 'mapController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Map'
        }
      });
  }

}());