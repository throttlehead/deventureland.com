define([
  "jquery",
  "underscore",
  "backbone",  
  "views/components/full.screen",
], function($, _, Backbone, FullScreen){

  var ContactForm = FullScreen.extend({
    id: "contactForm",

    events: function(){
      return _.extend({}, FullScreen.prototype.events, {
        
      });
    },


    initialize: function(options) {
      FullScreen.prototype.initialize.apply(this, arguments);
      this.initListeners();
    },


    render: function() {
      var template = _.template( window.templates.find("#contact_form_t").html(), {});
      this.$el.html( template );
      return this;
    },


    initListeners: function() {

    }


  });

  return ContactForm;

});