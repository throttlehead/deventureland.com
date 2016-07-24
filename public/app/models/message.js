define([
  "jquery",
  "underscore",
  "backbone",
  "models/base"
], function($, _, Backbone, BaseModel){

  var Message = BaseModel.extend({

  	urlRoot: "/message"

  });

  return Message;

});