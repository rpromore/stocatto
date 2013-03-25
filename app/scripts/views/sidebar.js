define([
    'backbone',
    'text!templates/sidebar.html'
], function (Backbone, SidebarTemplate) {
    'use strict';
    return Backbone.View.extend({
        el: $('#sidebar'),
        template: _.template(SidebarTemplate),
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        events: {
            'click #dashboard': 'clickDashboard',
            'click #explore': 'clickExplore'
        },
        clickDashboard: function () {
            $('#dashboard').parent('li').addClass('active').siblings('li').removeClass('active');
            this.options.router.navigate('dashboard', { trigger: true });
            return false;
        },
        clickExplore: function () {
            $('#explore').parent('li').addClass('active').siblings('li').removeClass('active');
            this.options.router.navigate('explore', { trigger: true });
            return false;
        }
    });
});