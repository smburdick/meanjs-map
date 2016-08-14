(function() {
  'use strict';

  angular.module('map')
         .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Map',
      state: 'map',
      roles: ['*']
    });
  }
}());
