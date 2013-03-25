/*global define */
define([
    'jquery',
    'backbone',
    'modules/music',
    'views/sidebar',
    'views/topbar',
    'views/track',
    'views/tracks',
    'views/player'
],

function ($, Backbone, Music, SidebarView, TopbarView, TrackView, TracksView, PlayerView) {
    'use strict';
    var App = function () {
        var tracks = new TracksView({
            itemView: TrackView,
            collection: Music.tracks
        });

        var topbar = new TopbarView({
            music: Music
        });
        topbar.render();

        var Router = Backbone.Router.extend({
            routes: {
                '': 'redirect',
                'dashboard': 'dashboard',
                'explore': 'explore'
            },
            redirect: function () {
                console.log('redirect');
                this.navigate('/dashboard', {trigger: true, replace: true});
            },
            dashboard: function () {
                Music.fetch();
                tracks.render();
                tracks.renderAllItems();
                $('#content').html('').prepend(topbar.$el).append(tracks.$el);
            },
            explore: function () {
                // TODO replace with view later
                $('#content').html('Explore page');
            }
        });

        this.Router = new Router();
        Backbone.history.start({pushState: true});

        var sidebar = new SidebarView({
            router: this.Router
        });
        sidebar.render();

        var player = new PlayerView();
        player.render();

    };

    App.prototype = {
        views: {},
        collections: {}
    };
    return App;
});