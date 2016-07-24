define([
  "jquery",
  "underscore",
  "backbone"
], function($, _, Backbone){

  var BaseView = Backbone.View.extend({
    className: "home",

    subviews: {},


    initialize: function(options) {
      if ( typeof this.options == "undefined" ) { this.options = {}; }
      _.extend(this.options, options);

      this.app = window.app; 
    },


    close: function() {
      if ( _.isObject(this.subviews) || _.isArray(this.subviews) ) {
        _.each( this.subviews, function(view) {
          if ( _.isObject(view) === true && _.isFunction(view.close) === true ) {
            view.close();
          }
        });
      }
      
      if ( this.onClose && typeof( this.onClose ) === "function" ) {
        this.onClose();
      }

      this.stopListening();
      this.remove();
      this.unbind();
    },


    showLoader: function() {
      $('#appLoader').stop().fadeIn(250);
    },


    hideLoader: function() {
      $('#appLoader').stop().fadeOut(250);
    }

  });

  return BaseView;

});