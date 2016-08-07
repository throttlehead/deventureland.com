require.config({
  baseUrl: "/js",
  paths: {
    jquery: "libraries/jquery/dist/jquery",
    underscore: "libraries/underscore/underscore",
    backbone: "libraries/backbone/backbone",
    tether: "libraries/tether/dist/js/tether",
    bootstrap: "libraries/bootstrap/dist/js/bootstrap",
    css: "libraries/require-css/css",
    PreloadJS: "libraries/PreloadJS/lib/preloadjs-0.6.2.combined",
    validate: "libraries/validatejs/validate",
    serializeJSON: "libraries/jquery.serializeJSON/jquery.serializejson",
    notify: "libraries/remarkable-bootstrap-notify/bootstrap-notify"
  },

  shim: {
    "jquery": {
      exports: "jQuery"
    },

    "tether": {
      deps: ["jquery"],
    },

    "bootstrap": {
      deps: ["jquery", "tether"],
    },

    "underscore": {
      deps: ["jquery"],
      exports: "_"
    },

    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },

    "PreloadJS": {
      deps: [],
      exports: "PreloadJS"
    },

    "validate": {
      deps: [],
      exports: "validate"
    },

    "serializeJSON": {
      deps: ['jquery'],
      exports: "serializeJSON"
    },

    'notify': {
      deps: ['bootstrap'],
      exports: 'notify'
    }
        
  }  
});

require([
  "apps/dashboard/app",
], function(Dashbaord){
  Dashbaord.initialize();
});