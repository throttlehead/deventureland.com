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
      console.log('hello')
      this.$el.removeClass('show');
    }

  });

  return FullScreen;

});