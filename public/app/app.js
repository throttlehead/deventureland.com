define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'css',
  'router',
  'view.controller',  
  'css!/app/css/glyphicons',
  'css!/app/css/social',    
  'css!/app/libraries/bootstrap/dist/css/bootstrap.min',
  'css!/app/libraries/slick-carousel/slick/slick',
  'css!/app/libraries/slick-carousel/slick/slick-theme',
  'css!/app/css/app'
], function($, _, Backbone, bootstrap, css, Router, ViewController){

  var initialize = function() {
  	window.app = {
  		collections: {},
  		models: {}
  	};

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