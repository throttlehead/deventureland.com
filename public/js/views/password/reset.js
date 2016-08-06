define([
  'jquery',
  'underscore',
  'backbone',

  'views/base'
], function($, _, Backbone, BaseView){

  var SendReset = BaseView.extend({
    id: 'passwordReset',
    className: 'password_reset view dark',


    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
    },


    render: function() {
      var template = _.template( window.templates.find("#password_reset_t").html());
      this.$el.html( template );
      this.hideLoader();
      this.animate();
      return this;
    },


    animate: function() {
      this.$el.find('.card').delay(1000).show().addClass('slideInDown animated');
    }


  });

  return SendReset;

});