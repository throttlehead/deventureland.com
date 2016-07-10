require.config({	
  paths: {
    jquery: "libraries/jquery/dist/jquery",
    underscore: "libraries/underscore/underscore",
    backbone: "libraries/backbone/backbone",
    bootstrap: "libraries/bootstrap/dist/js/bootstrap",
    css: "libraries/require-css/css",
    Waypoint: "libraries/waypoints/lib/jquery.waypoints",
    slick: "libraries/slick-carousel/slick/slick",
    backstretch: "libraries/jquery-backstretch/jquery.backstretch",
    textrotator: "libraries/simple-text-rotator/jquery.simple-text-rotator.min",
    stellar: "libraries/jquery.stellar/jquery.stellar",
    EasleJS: "libraries/EaselJS/lib/easeljs-0.8.1.combined",
    TweenJS: "libraries/TweenJS/lib/tweenjs-0.6.1.combined",
    PreloadJS: "libraries/PreloadJS/lib/preloadjs-0.6.1.combined",
  },

  shim: {
    "jquery": {
      exports: "jQuery"
    },

    "bootstrap": {
      deps: ["jquery"],
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
    }
  }  
});

require([
  "app",
], function(App){
  App.initialize();
});