define([
    'backbone',
    '../models/track'
], function (Backbone, Track) {
    'use strict';
    return Backbone.Collection.extend({
        model: Track
    });
});