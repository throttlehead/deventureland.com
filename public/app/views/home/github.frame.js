define([
  "jquery",
  "underscore",
  "backbone",  
  "views/base",
], function($, _, Backbone, BaseView){

  var GitHubFrame = BaseView.extend({
    className: "github_frame",

    events: {},


    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
      this.initListeners();
    },


    render: function() {
    	var template = _.template( window.templates.find("#github_frame_t").html(), {});
    	this.$el.html( template );
    	return this;
    },


    initListeners: function() {

    },


    load: function(url) {
      this.frame = this.$el.find(".#gitHubIframe");
      this.frame.load(url);
    }


  });

  return GitHubFrame;

});