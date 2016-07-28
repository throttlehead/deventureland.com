({
  name: "deventureland.develop",
  out: "deventureland.production-build.js",
  generateSourceMaps: true,
  preserveLicenseComments: false,
  optimize: 'uglify2',

  map: {
    '*': {
      'css': "libraries/require-css/css",
    }
  },

  paths: {
    jquery: "libraries/jquery/dist/jquery.min",
    underscore: "libraries/underscore/underscore-min",
    backbone: "libraries/backbone/backbone-min",
    tether: "libraries/tether/dist/js/tether.min",
    bootstrap: "libraries/bootstrap/dist/js/bootstrap.min",
    Waypoint: "libraries/waypoints/lib/jquery.waypoints.min",
    slick: "libraries/slick-carousel/slick/slick.min",
    backstretch: "libraries/jquery-backstretch/jquery.backstretch.min",
    textrotator: "plugins/simple-text-rotator/jquery.simple-text-rotator.min",
    stellar: "libraries/jquery.stellar/jquery.stellar.min",
    EasleJS: "libraries/EaselJS/lib/easeljs-0.8.1.combined",
    TweenJS: "libraries/TweenJS/lib/tweenjs-0.6.1.combined",
    PreloadJS: "libraries/PreloadJS/lib/preloadjs-0.6.2.combined",
    validate: "libraries/validatejs/validate.min",
    serializeJSON: "libraries/jquery.serializeJSON/jquery.serializejson.min",
    notify: "libraries/remarkable-bootstrap-notify/bootstrap-notify.min"
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