define([
  'jquery',
  'underscore',
  'backbone',
  'tether',
  'bootstrap',
  'css',
  'router',
  'view.controller'
], function($, _, Backbone, tether, bootstrap, css, Router, ViewController){

  var initialize = function() {
    if (typeof window.app !== "object") {
      window.app = {};
      window.app.data = {};
    }

  	window.app.data.collections = {};
    window.app.data.models = {};

    window.templates = $('.templates');
  	
  	window.app.view_controller = new ViewController();
    window.app.view_controller.start();    

  	$('#app').html( window.app.view_controller.render().el );

    Router.initialize( window.app.view_controller );
  }

  return {
    initialize: initialize
  };
  
});