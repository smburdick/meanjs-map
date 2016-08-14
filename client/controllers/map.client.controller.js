(function() {
  'use strict';
  angular
      .module('map', ['uiGmapgoogle-maps'])
      .controller('mapController', mapController)
      .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyCVWrnLFtqpyynJwujU041GgQyDlH3PEsE',
          v: '3.20',
          libraries: 'weather,geometry,visualization,places'
        });
      });

  // angular.module('map', ['uiGmapgoogle-maps'])
  //        .controller('mapController', mapController);
  //       .config(function(uiGmapGoogleMapApiProvider) {
          //  uiGmapGoogleMapApiProvider.configure({
          //    key: 'AIzaSyCVWrnLFtqpyynJwujU041GgQyDlH3PEsE',
          //    v: '3.20',
          //    libraries: 'weather,geometry,visualization,places'
          //  });
    //     });
//  angular.module('map', ['uiGmapgoogle-maps']);

  mapController.$inject = ['$scope'];

  function mapController($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }

}());
