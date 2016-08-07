define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
    var Router = Backbone.Router.extend({
        start: function(view_controller, hijack_pushstate) {
            this.view_controller = view_controller;
            if (hijack_pushstate === true) {
                this.initLinkPushStateHijack();
            }
        },

        switchView: function(view) {
            this.view_controller.switchView(view);
        },

        showHome: function() {
            this.switchView('home');
        },

        initLinkPushStateHijack: function() {
            var self = this;

            $(document).on("click", "a[href]:not([data-bypass])", function(e) {
                var path = $(this)[0].pathname.substring(1, $(this)[0].pathname.length);
                if (_.has(self.routes, path)) {
                    e.preventDefault();
                    Backbone.history.navigate(path, {trigger: true});
                }
            });
        }   
    });

    return Router;
});