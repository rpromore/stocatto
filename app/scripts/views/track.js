define([
    'backbone'
], function (Backbone) {
    'use strict';
    return Backbone.View.extend({
        tagName: 'tr',
        render: function () {
            this.$el.html('<td>' + this.model.get('title') + '</td>');
            return this;
        }
    });
});