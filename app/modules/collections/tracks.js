define(
  [
    "backbone",
    "../models/track"
  ],
  function(Backbone, track){
    return Backbone.Collection.extend({
      model: track
    });
  }
);