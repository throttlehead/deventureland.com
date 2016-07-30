define([
  "jquery",
  "underscore",
  "backbone",
  "views/base",
], function($, _, Backbone, BaseView){

  var Controller = Backbone.View.extend({
    className: "view_controller",


    render: function() {
      return this;
    },


    start: function() {
      this.initResizeEvent();
    },


    renderView: function(view_name, options) {
    	if (!_.isObject(options)) {
    		options = {}
    	}

      var SubView = _.find(this.views, function(value, key) {
        return key == view_name;
      });

      if ( typeof(SubView) === 'undefined' ) {
        console.warn( 'View name '+ view_name + ' was not found in the template hash.' );
        SubView = this.views['not_found'];
      }

      this.sub_view = new SubView.view(options);
      this.$el.find('.view_container').html(this.sub_view.render().el);

      this.updatePageData(SubView.title);
      this.updateNavigation();

      if (_.isFunction(options.onRender)) {
        options.onRender(this);
      }

      $("#app_container").show();

      Backbone.trigger("viewRendered");
    },


    switchView: function(newView, options) {
      this.showLoader();

      if (typeof this.sub_view === "object") {
        this.sub_view.close();
      }

      this.renderView(newView, options);
    },


    updatePageData: function(title) {
      document.title = title;
    },


    updateNavigation: function() {},


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

      window.addEventListener("orientationchange", function(e) {
        self.trigger( 'resize', {
          width : $(e.currentTarget).width(),
          height: $(e.currentTarget).height()
        });
      });
    },


    showLoader: function() {
      $('#appLoader').stop().show();
    },


    hideLoader: function() {
      $('#appLoader').stop().delay(400).fadeOut(300);
    }

  });

  return Controller;

});