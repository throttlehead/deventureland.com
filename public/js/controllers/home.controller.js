define([
  "jquery",
  "underscore",
  "backbone",
  "controllers/controller",
  "views/nav",
  "views/home/home",
  "views/404",
  "views/auth/login",
], function($, _, Backbone, Controller, Nav, Home, NotFound, Login){

  var HomeController = Controller.extend({
    id: "homeController",

    views: {
      "home": {
        "view": Home,
        "title": "Deventureland"
      },
      "login": {
        "view": Login,
        "title": "Login - Deventureland"
      },
      "not_found": {
        "view": NotFound,
        "title": "404 - Deventureland"
      }
    },

    subviews: {},


    start: function() {
      this.subviews.nav = new Nav();
      Controller.prototype.start.apply(this, arguments);
    },


    render: function() {
      this.$el.html( this.subviews.nav.render().el ).append('<div class="view_container"></div>');
      return this;
    },


    updateNavigation: function() {
    	this.subviews.nav.updateActiveLink();
    }


  });

  return HomeController;

});