define([
    'backbone',
    'backbone.collectionview',
], function (Backbone) {
    'use strict';
    return Backbone.CollectionView.extend({
        tagName: 'table',
        id: 'tracks',
        className: 'table table-striped table-hover',
        collectionEvents: {
            'add': 'added'
        },
        added: function () {
            console.log('model added');
        }
    });
});