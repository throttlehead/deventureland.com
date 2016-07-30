define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView){

  var Footer = BaseView.extend({

    id: 'app-footer',
  	

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
    },


    render: function() {
      var template = _.template( window.templates.find("#footer_t").html(), {});
      this.$el.html( template );
      return this;      
    }

  });

  return Footer;

});