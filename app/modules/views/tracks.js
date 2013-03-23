define([
  'backbone',
  'backbone.collectionview',
], function(Backbone){
  return Backbone.CollectionView.extend({
    tagName: "table",
    className: "table table-striped table-hover",
    collectionEvents: {
      "add": "added"
    },
    added: function(){
      console.log("model added");
    }
  });
});