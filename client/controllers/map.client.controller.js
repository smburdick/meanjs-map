(function() {
  'use strict';
  angular
      .module('map')
      .controller('MapController', MapController)
      .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyCVWrnLFtqpyynJwujU041GgQyDlH3PEsE',
          v: '3.20',
          libraries: 'weather,geometry,visualization,places'
        });
      });

  MapController.$inject = ['$scope'];

  function MapController($scope) {
    $scope.map = {
      // University of Puget Sound
      center: {
        latitude: 47.2623,
        longitude: -122.4816
      },
      zoom: 15
    };
  }

}());
