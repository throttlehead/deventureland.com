define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var AppRouter = Backbone.Router.extend({

    routes: {
    	'': 'showHome',
      'home': 'showHome',
      'login': 'showLogin',
      'password/send_reset': 'showSendReset',
      '404': 'showNotFound',
    },


    initialize: function(view_controller) {
    	this.view_controller = view_controller;
    	this.initLinkPushStateHijack();
    },


    initLinkPushStateHijack: function() {
    	var self = this;

      $(document).on("click", "a[href]:not([data-bypass])", function(e) {
        var href = $(this).attr("href");

        if (href.length <= 0) { return; }

        if (href[0] === '/') { 
        	href = href.slice(1, href.length); 
        }

        if (_.has(self.routes, href)) {
          e.preventDefault();
          Backbone.history.navigate(href, {trigger: true});
        }
      });
    },


    switchView: function(view) {
      this.view_controller.switchView(view);
    },


    showHome: function() {
    	this.switchView('home');
    },


    showBlog: function() {
    	this.switchView('blog');
    },


    showProjects: function() {
    	this.switchView('projects');
    },


    showNotFound: function() {
    	this.switchView('not_found');
    },


    showLogin: function() {
      this.switchView('login');
    },


    showSendReset: function() {
      this.switchView('send_reset');
    }

  });

  var initialize = function(view_controller){
  	if (!_.isObject(window.app)) {
  		window.app = {};
  	}

    window.app.router = new AppRouter(view_controller);

    Backbone.history.start({pushState: true});
  };

  return {
    initialize: initialize
  };

});