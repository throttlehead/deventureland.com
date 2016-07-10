define([
  "jquery",
  "underscore",
  "backbone",
  "backstretch",
  "textrotator",
  "Waypoint",  
  "views/base",
  "views/animations/cycle.animation"
], function($, _, Backbone, backstretch, textrotator, Waypoint, BaseView, CycleAnimation){

  var Home = BaseView.extend({
    className: "home",

    waypoints: {},

    events: {
      'click .message'  : 'showMessage'
    },


    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
      this.initListeners();
    },


    render: function() {
    	var template = _.template( window.templates.find("#home_t").html(), {});
    	this.$el.html( template );
    	return this;
    },


    initListeners: function() {
      this.listenTo( Backbone, "viewRendered", this.viewRendered );
      this.listenTo( Backbone, "windowResize", this.setSlideCss );
    },


    viewRendered: function() {
    	this.setSlideCss();
    	this.initBackStrech();
    	this.initTextRotator();
    },
    

    setSlideCss: function(e) {
    	var height = $(window).height();
    	var slide = this.$el.find(".home-slide");
    	var slide_content = slide.children(".slide-content");

      if (height < 960) {
        height = 960;
      }

    	slide.height(height);
    },


    initBackStrech: function() {
    	this.$el.find(".home-slide").backstretch([
	      "/img/slideshow/slide1.jpg", 
	      "/img/slideshow/slide2.jpg", 
	      "/img/slideshow/slide3.jpg", 
		  ], {
		  	duration: 3000, 
		  	fade: 500
		  });
    },


    initTextRotator: function() {
    	this.$el.find(".slide-rotator").textrotator({
			  animation: "fade",
			  separator: ",",
			  speed: 1750
			});
    },


    showMessage: function() {
      
    }


  });

  return Home;

});