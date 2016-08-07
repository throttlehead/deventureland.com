define([
    'jquery',
    'underscore',
    'backbone',
    'routers/router'
], function($, _, Backbone, Router){
    var DashboardRouter = Router.extend({
        routes: {
            '': 'showHome',
        },

        showHome: function() {
            
        }
    });

    return DashboardRouter;
});