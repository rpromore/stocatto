define([
  'backbone',
  'text!/modules/templates/player.html'
], function(Backbone, PlayerTemplate){
  return Backbone.View.extend({
    el: $("#player"),
    template: _.template(PlayerTemplate),
    render: function(){
      this.$el.html(this.template());
      return this;
    }
  });
});