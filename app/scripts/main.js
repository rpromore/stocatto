require.config({
    "paths": {
      "jquery": "../components/jquery/jquery",
      "bootstrap": "vendor/bootstrap",
      "modernizr": "../components/modernizr",
      "lodash": "../components/lodash/lodash",
      "backbone": "../components/backbone/backbone",
      "backbone.marionette": "../components/backbone.marionette/lib/backbone.marionette"
    },
    "shim": {
      backbone: {
        deps: ["lodash", "jquery"],
        exports: "Backbone"
      },
      "backbone.marionette": {
        deps: ["backbone"],
        exports: "Marionette"
      }
    }
});

require(['app'], function (app) {
    'use strict';
    app.start();
});