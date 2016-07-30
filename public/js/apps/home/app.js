define([
  'jquery',
  'underscore',
  'backbone',
  'tether',
  'bootstrap',
  'css',
  'routers/home.router',
  'controllers/home.controller'
], function($, _, Backbone, tether, bootstrap, css, HomeRouter, HomeController){

  var initialize = function() {
    if (typeof window.app !== "object") {
      window.app = {};
      window.app.data = {};
    }

  	window.app.data.collections = {};
    window.app.data.models = {};

    window.templates = $('.templates');
  	
  	window.app.view_controller = new HomeController();
    window.app.view_controller.start();    

  	$('#app').html( window.app.view_controller.render().el );

    HomeRouter.initialize( window.app.view_controller );
  }

  return {
    initialize: initialize
  };
  
});