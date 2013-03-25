define([
    '../collections/tracks',

    // Providers
    '../providers/reddit',

    // Services
    '../services/youtube'
], function (Tracks, Reddit, YouTube) {
    'use strict';
    var Music = {};

    Music.tracks = new Tracks();
    Music.providers = [Reddit];
    Music.services = [YouTube];

    Music.fetch = function () {
        Music.tracks.reset();
        _.each(Music.providers, function (k) {
            _.each(Music.services, function (s) {
                k.validDomains = _.union(k.validDomains, s.domains);
            });

            k.fetch({
                success: function (c) {
                    Music.tracks.add(c.models);
                }
            });
        });

        console.log(Music.tracks);
    };

    return Music;
});