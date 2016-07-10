define([
  "jquery",
  "underscore",
  "backbone",
  "views/nav",
  "views/home/home",
  "views/blog/blog",
  "views/projects/projects",
  "views/404",
], function($, _, Backbone, Nav, Home, Blog, Projects, NotFound){

  var Controller = Backbone.View.extend({
    className: "view_controller",

    template_hash: {
      "home": {
        "view": Home,
        "title": "Deventureland"
      },
      "blog": {
        "view": Blog,
        "title": "Deventureland - Blog"
      },
      "projects": {
        "view": Projects,
        "title": "Deventureland - Projects"
      },
      "not_found": {
        "view": NotFound,
        "title": "Deventureland - 404"
      },
    },

    subviews: {},


    initialize: function() {

    },


    render: function() {
      this.$el.html( this.subviews.nav.render().el ).append('<div class="view"></div>');
      return this;
    },


    start: function() {
      this.initResizeEvent();
      this.subviews.nav = new Nav();
    },


    renderView: function(view_name, options) {
    	if (!_.isObject(options)) {
    		options = {}
    	}

      var SubView = _.find(this.template_hash, function(value, key) {
        return key == view_name;
      });

      if ( typeof(SubView) === 'undefined' ) {
        console.warn( 'View name '+ view_name + ' was not found in the template hash.' );
        SubView = this.template_hash['not_found'];
      }

      this.sub_view = new SubView.view(options);
      this.$el.find('.view').html(this.sub_view.render().el);

      this.updatePageData(SubView.title);
      this.updateNavigation();

      if (_.isFunction(options.onRender)) {
        options.onRender(this);
      }

      $("#app_container").show();

      Backbone.trigger("viewRendered");
    },


    switchView: function(newView, options) {
      if (typeof this.app_view === "object" && typeof this.app_view.sub_views === "object") {
        this.sub_view.closeViews();
      }

      this.renderView(newView, options);
    },


    updatePageData: function(title) {
      document.title = title;
    },


    updateNavigation: function() {
    	this.subviews.nav.updateActiveLink();
    },


    initResizeEvent: function() {
      var self = this;
      var resize_countdown = null;

      $( window ).resize(function(e) {
        clearTimeout( resize_countdown );        

        resize_countdown = setTimeout(function() {
          self.trigger( 'resize', {
            width : $(e.currentTarget).width(),
            height: $(e.currentTarget).height()
          });
        }, 100);
      });
    }

  });

  return Controller;

});