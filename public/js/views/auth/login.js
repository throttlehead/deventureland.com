define([
  'jquery',
  'underscore',
  'backbone',

  'views/base'
], function($, _, Backbone, BaseView){

  var NotFound = BaseView.extend({
    id: 'login',
    className: 'login view dark',


    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
    },


    render: function() {
      var template = _.template( window.templates.find("#login_t").html());
      this.$el.html( template );
      this.hideLoader();
      this.animate();
      return this;
    },


    animate: function() {
      this.$el.find('.card').delay(1000).show().addClass('slideInDown animated');
    }


  });

  return NotFound;

});