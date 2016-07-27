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
      var template = _.template( window.templates.find("#404_t").html());
      this.$el.html( template );
      this.hideLoader();
      return this;      
    }

  });

  return NotFound;

});