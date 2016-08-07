define([
    "jquery",
    "underscore",
    "backbone",
    "controllers/controller"
], function($, _, Backbone, Controller){
    var DashbaordController = Controller.extend({
        id: "homeController",

        views: {

        },

        subviews: {},

        start: function() {
            Controller.prototype.start.apply(this, arguments);
        },

        render: function() {
            this.$el.append('<div class="view_container"></div>');
            return this;
        },

        updateNavigation: function() {
            this.subviews.nav.updateActiveLink();
        }
    });

    return DashbaordController;
});