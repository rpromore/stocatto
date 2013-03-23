define([
  'backbone',
  'text!/modules/templates/topbar.html'
], function(Backbone, TopbarTemplate){
  return Backbone.View.extend({
    el: $("#top"),
    template: _.template(TopbarTemplate),
    render: function(){
      this.$el.html(this.template());
      return this;
    },
    events: {
      "click #btn-refresh": "refresh"
    },
    refresh: function(){
      this.options.music.fetch();
    }
  });
});