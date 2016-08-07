define([
    'jquery',
    'underscore',
    'backbone',
    'routers/router'
], function($, _, Backbone, Router){
    var HomeRouter = Router.extend({
        routes: {
            '': 'showHome',
            'home': 'showHome',
            'login': 'showLogin',
            'password/send_reset': 'showSendReset',
            'password/reset/:token': 'showReset',
            '404': 'showNotFound',
            '*nomatch': 'showNotFound'
        },

        showHome: function() {
            this.switchView('home');
        },

        showBlog: function() {
            this.switchView('blog');
        },

        showProjects: function() {
            this.switchView('projects');
        },

        showNotFound: function() {
            this.switchView('not_found');
        },

        showLogin: function() {
            this.switchView('login');
        },

        showSendReset: function() {
            this.switchView('send_reset');
        },

        showReset: function() {
            this.switchView('reset');
        }
    });

    return HomeRouter;
});