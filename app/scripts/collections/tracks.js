define([
    'backbone',
    '../models/track'
], function (Backbone, track) {
    'use strict';
    return Backbone.Collection.extend({
        model: track
    });
});