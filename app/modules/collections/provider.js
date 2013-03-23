define([
  'backbone',
  '../models/track'
  ],
  function(Backbone, Track){
    return Backbone.Collection.extend({
      model: Track
    });
  }
);