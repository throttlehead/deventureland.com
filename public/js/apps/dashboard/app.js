define([
    'jquery',
    'underscore',
    'backbone',
    'tether',
    'bootstrap',
    'css',
    'routers/dashboard.router',
    'controllers/dashboard.controller'
], function($, _, Backbone, tether, bootstrap, css, DashboardRouter, DashboardController){
    var initialize = function() {
        if (typeof window.app !== "object") {
            window.app = {};
            window.app.data = {};
        }

        window.app.data.collections = {};
        window.app.data.models = {};

        window.templates = $('.templates');

        window.app.view_controller = new DashboardController();
        window.app.view_controller.start();

        window.app.router = new DashboardRouter();
        window.app.router.start(window.app.view_controller)

        $('#app').html( window.app.view_controller.render().el );

        Backbone.history.start({pushState: true});
    }

    return {
        initialize: initialize
    };
});