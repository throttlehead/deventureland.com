define([
  "jquery",
  "underscore",
  "backbone",
  "backstretch",
  "textrotator",
  "Waypoint",  
  "PreloadJS",
  "views/base",
], function($, _, Backbone, backstretch, textrotator, Waypoint, PreloadJS, BaseView){

  var Home = BaseView.extend({
    id: "home",
    className: "home view dark",

    waypoints: {},

    events: {},

    preload: [
      "img/avatars/me.jpg"
    ],


    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
      this.initSubviews();
      this.initListeners();
    },


    render: function() {
    	var template = _.template( window.templates.find("#home_t").html());
    	this.$el.html( template );
    	return this;
    },


    initListeners: function() {
      this.listenTo( Backbone, "viewRendered", this.viewRendered );
      this.listenTo( this.app.view_controller, "resize", this.setCss );
    },


    initSubviews: function() {},


    onClose: function() {
      this.queue.close();
    },


    viewRendered: function() {
    	this.setCss();
      this.preloadImages();
    },


    preloadImages: function() {
      var queue = new createjs.LoadQueue(true);

      queue.on("complete", this.onLoadComplete, this);

      _.each(this.slide_images, function(image) {
        queue.loadFile(image);
      });

      queue.load();
      this.queue = queue;
    },


    onLoadComplete: function() {
      this.initBackStrech();
      this.initTextRotator();    
      this.hideLoader();
    },
    

    setCss: function(e) {
    	var height = $(window).height();
    	var slide = this.$el.find(".home-slide");
    	var slide_content = slide.children(".slide-content");

      if (height < 960) {
        height = 960;
      }

    	slide.height(height);

      if (this.backstretch_init === true) {
        this.$el.find(".home-slide").backstretch("resize");
      }
    },


    initBackStrech: function() {
    	this.$el.find(".home-slide").backstretch([
	      "/img/slideshow/slide1.jpg", 
	      "/img/slideshow/slide2.jpg", 
	      "/img/slideshow/slide3.jpg", 
		  ], {
		  	duration: 4000, 
		  	fade: 500
		  });

      this.backstretch_init = true;
    },


    initTextRotator: function() {
    	this.$el.find(".slide-rotator").textrotator({
			  animation: "fade",
			  separator: ",",
			  speed: 2250
			});
    }

  });

  return Home;

});