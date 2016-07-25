define([
  'jquery',
  'underscore',
  'backbone',
  'Waypoint',
  'views/base',
  "views/modules/contact.form"
], function($, _, Backbone, Waypoint, BaseView, ContactForm){

  var Nav = BaseView.extend({

    id: 'app-nav',
    className: 'app-nav',

    events: {
      'show.bs.collapse #app-nav-collapse': 'onCollapseShow',
      'hide.bs.collapse #app-nav-collapse': 'onCollapseHide',
      'click .nav-item': 'collapse',
      'click #contact': 'showContactForm',
    },

    sub_routes: [
      '/blog'
    ],

  	
    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
      this.initSubviews();
      this.initListeners();
      this.initWaypoint();
    },


    render: function() {
      var template = _.template( window.templates.find("#nav_t").html(), {});

      this.$el.html( template );
      this.$el.find('#contactAppend').html(this.subviews.contact_form.render().el);

      this.setCollapse();
      return this;      
    },


    initListeners: function() {
      this.listenTo( this.app.view_controller, 'resize', this.onResize );
      this.listenTo()
    },


    initSubviews: function() {
      this.subviews.contact_form = new ContactForm();
    },    


    initWaypoint: function() {
    	this.waypoint = new Waypoint({
    		element: this.$el,
    		handler: $.proxy(this.onWaypoint, this),
    		offset: -5
    	});
    },


    onWaypoint: function(direction) {
    	if (direction === 'down') {
    		this.$el.addClass('nav-scrolled')
    	} else {
    		this.$el.removeClass('nav-scrolled')
    	}
    },


    updateActiveLink: function() {
    	var path = window.location.pathname;

    	this.$el.find('.nav-link').each(function() {
    		if ($(this).attr('href') == path) {
    			$(this).parent().addClass('active');
    		} else {
    			$(this).parent().removeClass('active');
    		}
    	});

      if (_.indexOf(this.sub_routes, path) > -1) {
        this.$el.addClass('sub-nav');
      } else {
        this.$el.removeClass('sub-nav');
      }
    },


    onResize: function(data) {
      this.setCollapse(data.width);
    },


    setCollapse: function(width) {
      if (!width) {
        width = $(window).width();
      }

      if (width <= 1024) {
        this.collapse();
      } else {
        this.expand();
      }
    },


    collapse: function() {
      if ($(window).width() <= 1024) {
        this.$el.find('#app-nav-collapse').collapse('hide')
      }
    },


    expand: function() {
      if ($(window).width() <= 1024) {
        this.$el.find('#app-nav-collapse').collapse('show');
        this.onCollapseHide();
      }
    },


    onCollapseHide: function() {
      this.$el.removeClass('collapse-shown');
      this.trigger('collapseHide');
    },


    onCollapseShow: function() {
      this.$el.addClass('collapse-shown')
      this.trigger('collapseShow');
    },


    showContactForm: function() {
      this.subviews.contact_form.show();
    }

  });

  return Nav;

});