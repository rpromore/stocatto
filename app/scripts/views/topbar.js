define([
    'backbone',
    'text!templates/topbar.html'
], function (Backbone, TopbarTemplate) {
    'use strict';
    return Backbone.View.extend({
        id: 'top',
        template: _.template(TopbarTemplate),
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        events: {
            'click #btn-refresh': 'refresh'
        },
        refresh: function () {
            this.options.music.fetch();
        }
    });
});