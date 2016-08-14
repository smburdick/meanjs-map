(function() {
  'use strict';
  angular
      .module('map')
      .controller('mapController', mapController)
      .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyCVWrnLFtqpyynJwujU041GgQyDlH3PEsE',
          v: '3.20',
          libraries: 'weather,geometry,visualization,places'
        });
      });

  mapController.$inject = ['$scope'];

  function mapController($scope) {
    $scope.map = {
      center: { // University of Puget Sound
        latitude: 47.2623,
        longitude: -122.4816
      },
      zoom: 8
    };
  }

}());
