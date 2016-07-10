define([
  'jquery',
  'underscore',
  'backbone',

  'views/base'
], function($, _, Backbone, BaseView){

  var NotFound = BaseView.extend({
    className: 'home',

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, arguments);
    }

  });

  return NotFound;

});