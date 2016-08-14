(function (app) {
  'use strict';

  app.registerModule('map', ['uiGmapgoogle-maps']); // triggers error with ui dependencies
  app.registerModule('map.routes', ['ui.router', 'core.routes']);

}(ApplicationConfiguration));
