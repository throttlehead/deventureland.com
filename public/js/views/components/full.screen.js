define([
  "jquery",
  "underscore",
  "backbone",  
  "views/base",
], function($, _, Backbone, BaseView){

  var FullScreen = BaseView.extend({
    className: "full_screen",

    events: {
      "click .hide_btn": 'hide'
    },


    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
    },


    show: function() {
      this.$el.addClass('show');
    },


    hide: function() {
      if (typeof this.onHide === 'function') {
        this.onHide();
      }

      this.$el.removeClass('show');
    },


    onHide: function() {
      
    }

  });

  return FullScreen;

});