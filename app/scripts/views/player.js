define([
    'backbone',
    'text!templates/player.html'
], function (Backbone, PlayerTemplate) {
    'use strict';
    return Backbone.View.extend({
        el: $('#player'),
        template: _.template(PlayerTemplate),
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
});