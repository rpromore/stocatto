define([
	"../collections/provider"
],
function(Provider){
	var Reddit = Provider.extend({
		name: "Reddit",
		id: "reddit",
		url: "http://reddit.com/r/listentothis.json?jsonp=?&callback=?",
		valid_domains: [],
		parse: function(obj) {
			var ret = [];

			for( var i = 0; i < obj.data.children.length; i++ ) {
		  	if( _.indexOf(this.valid_domains, obj.data.children[i].data.domain) != -1 ) // a valid domain
		  		ret.push(obj.data.children[i].data);	
		  }

			return ret;
		}
	});
	return new Reddit();
});