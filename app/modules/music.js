define([
    "../modules/collections/tracks",

    // Providers
    "../modules/providers/reddit",

    // Services
    "../modules/services/youtube"
  ], 

  function(Tracks, Reddit, YouTube){
    var Music = {};

    Music.tracks = new Tracks();
    Music.providers = [Reddit];
    Music.services = [YouTube];

    Music.fetch = function(){
      Music.tracks.reset();
      _.each(Music.providers, function(k,v){
        _.each(Music.services, function(s){
          k.valid_domains = _.union(k.valid_domains, s.domains);
        });

        k.fetch({
          success: function(c){
            Music.tracks.add(c.models);
          }
        });
      });

      console.log(Music.tracks);
    };

    /*
    Music.Models = {
      service: Backbone.Model.extend({}),
      provider: Backbone.Model.extend({}),
      track: Backbone.Model.extend({})
    };

    Music.Collections = {
      services: Backbone.Collection.extend({
        model: Music.Models.service
      }),
      providers: Backbone.Collection.extend({
        model: Music.Models.provider
      }),
      tracks: Backbone.Collection.extend({
        model: Music.Models.track
      })
    };

    Music.Views = {};

    Music.Router = Backbone.Router.extend({
      routes: {
        "": "index"
      },
      index: function(){
        console.log("index");
      }
    });
  */ 

    return Music;
  }
);