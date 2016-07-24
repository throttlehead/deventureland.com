define([
  "jquery",
  "underscore",
  "backbone",
  "validate",
  "views/components/full.screen",
  "models/message"
], function($, _, Backbone, validate, FullScreen, MessageModel){

  var ContactForm = FullScreen.extend({
    id: "contactForm",

    events: function(){
      return _.extend({}, FullScreen.prototype.events, {
        'click .cancel_btn': 'hide',
        'click .submit_btn': 'submit'
      });
    },


    initialize: function(options) {
      FullScreen.prototype.initialize.apply(this, arguments);
      this.initModel();
      this.initListeners();
    },


    render: function() {
      var template = _.template( window.templates.find("#contact_form_t").html(), {});
      this.$el.html( template );
      return this;
    },


    initModel: function() {
      this.model = new MessageModel();
    },


    initListeners: function() {

    },


    submit: function() {
      if (!this.validate()) { return; }
      
    },


    validate: function() {
      return true;
    }


  });

  return ContactForm;

});