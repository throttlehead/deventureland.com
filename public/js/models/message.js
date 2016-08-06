define([
  "jquery",
  "underscore",
  "backbone",
  "plugins/notify",
  "models/base"
], function($, _, Backbone, Notify, BaseModel){

  var Message = BaseModel.extend({

  	urlRoot: '/message',


  	initialize: function() {
  		this.initListeners();
  	},


  	initListeners: function() {
  		this.listenTo(this, 'sync', this.showSuccess);
  		this.listenTo(this, 'error', this.showError);
  	},


  	showSuccess: function(model, response) {
  		Notify.success('Your message has been sent! I\'ll get back to you as soon as possible.');
  	},


  	showError: function(model, response) {
  		Notify.error(response.responseJSON.error);
  	}

  });

  return Message;

});