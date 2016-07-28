require.config({	
  paths: {
    jquery: "libraries/jquery/dist/jquery",
    underscore: "libraries/underscore/underscore",
    backbone: "libraries/backbone/backbone",
    tether: "libraries/tether/dist/js/tether",
    bootstrap: "libraries/bootstrap/dist/js/bootstrap",
    css: "libraries/require-css/css",
    Waypoint: "libraries/waypoints/lib/jquery.waypoints",
    slick: "libraries/slick-carousel/slick/slick",
    backstretch: "libraries/jquery-backstretch/jquery.backstretch",
    textrotator: "plugins/simple-text-rotator/jquery.simple-text-rotator.min",
    stellar: "libraries/jquery.stellar/jquery.stellar",
    EasleJS: "libraries/EaselJS/lib/easeljs-0.8.1.combined",
    TweenJS: "libraries/TweenJS/lib/tweenjs-0.6.1.combined",
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

    "css": {
    	deps: [],
    	exports: "css"
    },

    "Waypoint": {
    	deps: ['jquery'],
    	exports: "Waypoint"
    },

    "slick": {
    	deps: ["jquery"],
    	exports: "slick"
    },

    "backstretch": {
    	deps: ["jquery"],
    	exports: "backstretch"
    },

    "textrotator": {
    	deps: ["jquery"],
    	exports: "textrotator"
    },

    "stellar": {
    	deps: ["jquery"],
    	exports: "stellar"
    },

    "EasleJS": {
      deps: [],
      exports: "EasleJS"
    },

    "TweenJS": {
      deps: [],
      exports: "TweenJS"
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

require(['tether'], function (Tether) {
  window.Tether = Tether;
});

require([
  "app",
], function(App){
  App.initialize();
});